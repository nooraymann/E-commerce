import mongoose from "mongoose";

const schema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        minLength: [1, 'too short review text']
    },
    user:{
        type:mongoose.Types.ObjectId,
        required: [true, 'user ID is required'],
        ref:'user',
    },
    product:{
       type:mongoose.Types.ObjectId,
       required: [true, 'product ID is required'],
       ref:'product' 
    },
    rate:{
        type:Number,
        min:0,
        max:5
    },
    image: String
}, { timestamps: true })


export const reviewModel = mongoose.model('review', schema)



