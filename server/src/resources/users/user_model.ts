import { ObjectId, Schema, model } from "mongoose";

export interface OtherEmail {
    email: string;
    isVerified: boolean;
}

export interface IUser {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    primaryEmail: string;
    otherEmails?: OtherEmail[];
    mobileNumber?: string;
    lastLogin: Date;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isVerified: { type: Boolean, required: true },
        primaryEmail: { type: String, required: true },
        otherEmails: [
            {
                email: {
                    type: String,
                    required: true,
                },
                isVerified: {
                    type: Boolean,
                    required: true,
                },
            },
        ],
        mobileNumber: { type: String },
        lastLogin: { type: Date },
    },
    {
        timestamps: true,
    }
);

const User = model<IUser>("User", userSchema);

export default User;
