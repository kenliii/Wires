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
        }
    }
);
