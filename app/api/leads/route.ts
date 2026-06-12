import Lead from "@/app/lib/models/Lead";
import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const isFileUpload = (value: FormDataEntryValue | null): value is File =>
    typeof File !== "undefined" && value instanceof File && value.size > 0;

const uploadToCloudinary = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const dataUri = `data:${file.type};base64,${base64}`;

    const resourceType = file.type === "application/pdf" ? "raw" : "image";
    const uploadRes = await cloudinary.uploader.upload(dataUri, {
        folder: "DRManish/leads",
        resource_type: resourceType,
        use_filename: true,
        unique_filename: true,
        overwrite: false,
    });

    const prefix = resourceType === "raw" ? "pdf" : "image";
    return `${prefix}:${uploadRes.secure_url}`;
};

// POST /api/leads — Submit a new lead (from the form)
export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const contentType = req.headers.get("content-type") || "";
        const isMultipart = contentType.includes("multipart/form-data");

        const body = isMultipart ? await req.formData() : await req.json();

        const getValue = (key: string) =>
            isMultipart ? body.get(key) : (body as Record<string, unknown>)[key];

        const name = String(getValue("name") ?? "").trim();
        const phone = String(getValue("phone") ?? "").trim();
        const email = String(getValue("email") ?? "").trim();
        const service = String(getValue("service") ?? "").trim();
        const date = String(getValue("date") ?? "").trim();
        const time = String(getValue("time") ?? "").trim();
        const message = String(getValue("message") ?? "").trim();

        const uploadedFile = isMultipart ? body.get("file") : null;
        const image = String(getValue("image") ?? "").trim();

        if (!name || !phone || !service || !date || !time) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        let imageUrl = "";
        if (isFileUpload(uploadedFile)) {
            // Check if Cloudinary is configured
            if (
                !process.env.CLOUDINARY_CLOUD_NAME ||
                process.env.CLOUDINARY_CLOUD_NAME === "your_cloud_name" ||
                !process.env.CLOUDINARY_API_KEY ||
                !process.env.CLOUDINARY_API_SECRET
            ) {
                console.error("Cloudinary credentials are not configured in .env.local.");
                return NextResponse.json(
                    { success: false, message: "Cloudinary is not configured. Please set credentials in .env.local" },
                    { status: 500 }
                );
            }

            try {
                imageUrl = await uploadToCloudinary(uploadedFile);
            } catch (uploadError) {
                console.error("Cloudinary upload failed:", uploadError);
                return NextResponse.json(
                    { success: false, message: "File upload failed" },
                    { status: 500 }
                );
            }
        } else if (image) {
            imageUrl = image;
        }

        const lead = await Lead.create({
            name,
            phone,
            email,
            service,
            date,
            time,
            message,
            image: imageUrl,
        });

        return NextResponse.json(
            { success: true, data: lead },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}

// GET /api/leads — Fetch all leads (for admin panel)
export async function GET() {
    try {
        await connectDB();
        const leads = await Lead.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: leads });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}