import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'name is not unique'],
        trim: true,
        required: [true, 'name is required'],
        minLength: [2, 'too short brand name']
    },
    slug: {
        type: String,
        lowercase: true,
    },
    logo: String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
}, { timestamps: true })


export const brandModel = mongoose.model('brand', schema)



