import mongoose, { Schema } from "mongoose";

export interface Contact extends Document {
    fullname: string;
    email: string;
    phone: string;
    eventType?: string;
    message: string;
    createdAt: Date;
}

const contactSchema = new Schema<Contact>({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    eventType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<Contact>("Contact", contactSchema);