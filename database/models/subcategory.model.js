import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'name is not unique'],
        trim: true,
        required: [true, 'name is required'],
        minLength: [2, 'too short subcategory name']
    },
    slug: {
        type: String,
        lowercase: true,
    },
category:{
    type:mongoose.Types.ObjectId,
    ref:'category'
},
createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'user'
}
}, { timestamps: true })


export const subcategoryModel = mongoose.model('subcategory', schema)



