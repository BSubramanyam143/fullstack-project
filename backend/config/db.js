import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://subbu:12345@cluster0.5fakeqy.mongodb.net/food-del")
    .then(() => console.log("Connected successfully database "));
};
