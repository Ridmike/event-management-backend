import mongoose, { Schema } from "mongoose";

export interface Admin extends Document {
    email: string;
    password: string;
    role: "admin";
}

const adminSchema = new Schema<Admin>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin"] }
}, {
    timestamps: true
});

export default mongoose.model<Admin>("Admin", adminSchema);

