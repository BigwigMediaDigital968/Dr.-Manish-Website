import Lead from "@/app/lib/models/Lead";
import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const { status } = await req.json();

        if (!status || !["new", "contacted", "rejected"].includes(status)) {
            return NextResponse.json(
                { success: false, message: "Invalid status value" },
                { status: 400 }
            );
        }

        const lead = await Lead.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!lead) {
            return NextResponse.json(
                { success: false, message: "Lead not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: lead });
    } catch (error) {
        console.error("Failed to update lead status:", error);
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();

        const { id } = await params;

        const lead = await Lead.findByIdAndDelete(id);

        if (!lead) {
            return NextResponse.json(
                { success: false, message: "Lead not found" },
                { status: 404 }
            );
        }

        // Delete Cloudinary asset after successful DB deletion
        if (lead.image) {
            try {
                const fileUrl = lead.image.replace(/^[^:]+:/, "");

                const match = fileUrl.match(
                    /\/upload\/(?:v\d+\/)?(.+)\.[^.]+$/
                );

                if (match) {
                    const publicId = match[1];

                    await cloudinary.uploader.destroy(publicId);
                }
            } catch (cloudinaryError) {
                console.error(
                    "Cloudinary asset deletion failed:",
                    cloudinaryError
                );
            }
        }

        return NextResponse.json({
            success: true,
            message: "Lead deleted successfully",
        });
    } catch (error) {
        console.error("Failed to delete lead:", error);

        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
