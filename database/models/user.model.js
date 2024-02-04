import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
        minLength: [2, 'too short name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        unique:[true,"email is not unique"],
        minLength: [2, 'too short email']
    },
    password:{
        type:String,
        required: [true, 'password is required']
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    confirmedEmail:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:userModel,
    }
}, { timestamps: true })


export const userModel = mongoose.model('user', schema)



