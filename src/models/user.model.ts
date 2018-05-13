import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true }
});

export const User = model('User', userSchema);