import express from "express";
import { getBooks } from "../controller/card.controller.js";

const router = express.Router();

// Route to get all books
router.get("/books", getBooks);

export default router;
