import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mithleshmourya2004:0mAYoEMEnDbrtbq8@cluster0.one78.mongodb.net/food-del').then(() => console.log("DB Connected"));
}