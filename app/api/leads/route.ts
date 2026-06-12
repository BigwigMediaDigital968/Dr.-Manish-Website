import Lead from "@/app/lib/models/Lead";
import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST /api/leads — Submit a new lead (from the form)
export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();

        const { name, phone, specialty, date, time, image } = body;

        if (!name || !phone || !specialty || !date || !time) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        let imageUrl = "";
        if (image) {
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
                if (image.startsWith("data:application/pdf")) {
                    const uploadRes = await cloudinary.uploader.upload(image, {
                        folder: "DRManish/leads",
                        resource_type: "raw",
                    });
                    imageUrl = `pdf:${uploadRes.secure_url}`;
                } else if (image.startsWith("data:image/")) {
                    const uploadRes = await cloudinary.uploader.upload(image, {
                        folder: "DRManish/leads",
                        resource_type: "image",
                    });
                    imageUrl = `image:${uploadRes.secure_url}`;
                } else if (image.startsWith("data:")) {
                    const uploadRes = await cloudinary.uploader.upload(image, {
                        folder: "DRManish/leads",
                        resource_type: "auto",
                    });
                    imageUrl = `file:${uploadRes.secure_url}`;
                } else {
                    imageUrl = image;
                }
            } catch (uploadError) {
                console.error("Cloudinary upload failed:", uploadError);
                return NextResponse.json(
                    { success: false, message: "File upload failed" },
                    { status: 500 }
                );
            }
        }

        const lead = await Lead.create({
            ...body,
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