const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensure emails are unique
            trim: true, // Remove whitespace from both ends
            lowercase: true, // Convert email to lowercase
            match: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, // Basic email format validation
        },
        password: {
            type: String,
            required: true,
            minlength: 8, // Minimum password length
            select: false, // Exclude password from default query results
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
           type: Array,
           default: []
        },
        location: String,
        occupation: String,
        viewdProfile: Number,
        impressions: Number,
    }, {timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);
module.exports = User;
