import Books from "../Model/library.model.js";

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Books.find(); // Fetch all books from the database
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};
