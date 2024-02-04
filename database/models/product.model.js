import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'title is not unique'],
        trim: true,
        required: [true, 'title is required'],
        minLength: [2, 'too short product name'],
        maxLength:[100,"too long product name"]
    },
    slug: {
        type: String,
        lowercase: true,
      
    },
    description:{
        type:String,
        required:[true,"description is required"],
        trim:true,
        minLength:[10,"too short product description"],
        maxLength:[500,"too long product description"]
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    priceAfterDiscount:{
        type:Number,
        min:0,
        required:true
    },
    quantity:{
        type:Number,
        min:0,
        default:0
    },
    sold:{
        type:Number,
        min:0,
    },
    avgRate:{
        type:Number,
        maxLength:5,
        min:0
    },
    rateCount:{
        type:Number,
        min:0
    },
    imageCover: String,
    images:[],
    category:{
        type:mongoose.Types.ObjectId,
        ref:'category'
    },
    subcategory:{
        type:mongoose.Types.ObjectId,
        ref:'subcategory'
    },
    brand:{
        type:mongoose.Types.ObjectId,
        ref:'brand'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
}, { timestamps: true })


export const productModel = mongoose.model('product', schema)



