import mongoose from "mongoose"

const UserSchma = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        }
    })