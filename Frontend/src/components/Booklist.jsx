import React, { useEffect, useState } from "react";
import photo from '../../public/Book_logo.jpg';
import BookModel from "./BookModel.jsx";
import axios from "axios";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBook = async() => {
            try {
                const res = await axios.get("http://localhost:4001/cards/books");
                console.log(res.data)
                setBooks(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[]);

    return (
        <>
            <div className="overflow-x-auto mt-18 mb-12  dark:bg-slate-900 dark:text-white ">
                <div className="text-center mt-24 font-semibold text-2xl text-blue-700  dark:bg-slate-900 dark:text-white  ">
                    <h1>Book List</h1>
                </div>
                <table className="table">
                    {/* head */}
                    <thead> 
                        <tr className="font-bold text-blue-600 dark:bg-slate-900 dark:text-white">
                            <th>BookId</th>
                            <th>BookName</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {books.map((book) => ( 
                            <tr key={book.BookId} className="hover text-black dark:bg-slate-900 dark:text-black">
                                <td>{book.BookId}</td>
                                <div className="avatar">
                                    <div className="mask mask-squircle h-10 w-10">
                                        <img
                                            src={photo}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    <td>{book.BookName}</td>
                                </div>
                                <td>{book.category}</td>
                                <td>{book.price}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                            document.getElementById("my_modal_8").showModal()
                                        }
                                    >
                                        View
                                    </button>
                                </td>
                                    <BookModel/>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default BookList;