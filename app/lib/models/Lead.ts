import mongoose, { Schema, Document, models } from "mongoose";

export interface ILead extends Document {
    name: string;
    phone: string;
    email?: string;
    specialty: string;
    date: string;
    time: string;
    image?: string;
    notes?: string;
    createdAt: Date;
}

const LeadSchema = new Schema<ILead>(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, default: "" },
        specialty: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        image: { type: String, default: "" },
        notes: { type: String, default: "" },
    },
    { timestamps: true }
);

const Lead = models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
export default Lead;