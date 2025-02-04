import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import userRouter from "./route/user.route.js";
import libraryRouter from "./route/library.route.js";
import cardRouter from "./route/card.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connect to MongoDB

try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DataBase connect successfully");
} catch (error) {
  console.log("Error : ", error);
}

// Defining routes

app.use("/book",bookRoute);
app.use("/user",userRouter);
app.use("/library",libraryRouter);
app.use("/cards",cardRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});