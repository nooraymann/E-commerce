import mongoose from "mongoose"
export const dbConnection=()=>{
mongoose.connect("mongodb://127.0.0.1:27017/E-commerce")
.then(()=>console.log("E-commerce database connected"))
.catch(()=>console.log("E-commerce database connection failed"));
}