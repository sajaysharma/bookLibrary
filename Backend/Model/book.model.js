import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    BookId:Number,
    BookName:String,
    price:Number,
    Category:String,
    Image:String,
    Title:String 
});

const Book = mongoose.model("Book",bookSchema);

export default Book; 