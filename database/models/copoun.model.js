import mongoose from "mongoose";

const schema = new mongoose.Schema({
    code: {
        type: String,
        unique: [true, 'copoun is not unique'],
        trim: true,
        required: [true, 'copoun is required'],
        minLength: [2, 'too short copoun code']
    },
    expiryDate:{
        type:Date
    },
    discountAmount:{
        type:Number,
        required: [true, 'discount amount is required'],
    },
     createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
}, { timestamps: true })


export const categoryModel = mongoose.model('category', schema)



