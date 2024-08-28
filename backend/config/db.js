import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://neha06012005:neha6125@cluster0.pdktpqx.mongodb.net/tomato').then(()=>console.log("DB Connected"));
}