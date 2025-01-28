import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
    BookId:Number,
    BookName:String,
    author:String,
    category:String, 
    price:Number
});

const Books = mongoose.model("Library",librarySchema);

export default Books;