import Library from "../Model/library.model.js";

export const getLibrary = async(req,res) => {
    try {
        const { BookId, BookName, author, category, price } = req.body;
        const library = await Library.findOne({ BookId })
        if (library) {
            return res.status(400).json({ message: "Book Id already Exists" })
        }
        
        const createdBook = new Library({
            BookId : BookId,
            BookName : BookName,
            author : author,
            category : category,
            price : price,
        });
        await createdBook.save();
        res.status(201).json({ message: " Book Added Successfully" });
    } catch (error) {
        console.log("Error : " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getCard = async(req, res) => {
    try {
        const books = await Library.find()
        res.status(200).json(books)
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json(error);         
    }
}