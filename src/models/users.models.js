import { Schema, model } from "mongoose";

const UserSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
})

const UserModel = model('User', UserSchema);

export default UserModel;