import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  BookId: {
    type: Number,
    required: true,
  },
  BookName: {
      type: String,
      required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price : {
    type: Number,
    required: true,
  }
});

const Card = mongoose.model("Library", bookSchema);

export default Card;
