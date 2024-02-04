import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'name is not unique'],
        trim: true,
        required: [true, 'name is required'],
        minLength: [2, 'too short category name']
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
}, { timestamps: true })


export const categoryModel = mongoose.model('category', schema)



