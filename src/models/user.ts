import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    deliveryplace: {
        type: String,
        required: true
    }
})

const User = mongoose.models.User || mongoose.model("Users", UserSchema);
export default User;