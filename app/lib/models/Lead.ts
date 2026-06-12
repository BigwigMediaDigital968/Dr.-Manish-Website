import mongoose, { Schema, Document, models } from "mongoose";

export interface ILead extends Document {
    name: string;
    phone: string;
    email?: string;
    service: string;
    date: string;
    time: string;
    image?: string;
    message?: string;
    status: "new" | "contacted" | "rejected";
    createdAt: Date;
}

const LeadSchema = new Schema<ILead>(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, default: "" },
        service: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        image: { type: String, default: "" },
        message: { type: String, default: "" },
        status: {
            type: String,
            enum: ["new", "contacted", "rejected"],
            default: "new",
        },
    },
    { timestamps: true }
);

const Lead = models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
export default Lead;