import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AdminNavbar from '../components/AdminNavbar.jsx';

const AdminAction = () => {
  const [bookList, setBookList] = useState([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const bookInfo = {
      BookId: data.BookId,
      BookName: data.BookName,
      author: data.author,
      category: data.category,
      price: data.price,
    };
    await axios
      .post("http://localhost:4001/library/admin", bookInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          toast.success('Book Added Succesfully!');
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error :" + err.response.data.message);
        }
      });
  };

  useEffect(() => {
    const getBook = async() => {
        try {
            const res = await axios.get("http://localhost:4001/cards/books");
            console.log(res.data)
            setBookList(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    getBook();
},[]);

  

  
const handleRemoveBook = async (BookId) => {
  try {
    const res = await axios.delete("http://localhost:4001/cards/books${BookId}");
    if (res.data) {
      toast.success('Book removed successfully!');
      setBookList(bookList.filter((book) => book.BookId !== BookId)); // Update UI after deletion
    }
  } catch (error) {
    console.log(error);
    toast.error("Error: Could not remove the book.");
  }
};


  return (
    <>
       <AdminNavbar/>
      <h1 className='font-semibold text-3xl text-center text-blue-700 mt-24 underline'>Admin Panel</h1>
      <div className="max-w-screen-lg  md:ml-24 mt-12 p-6 space-y-6 ">
        <form onSubmit={handleSubmit(onSubmit)} method="div">
          <div className="bg-base-100 shadow  rounded-lg px-8">
            <h2 className="text-2xl text-blue-500 font-semibold mb-4">Add New Book</h2>
            <div className=" ">
              <div className='md:mt-4 space-y-2s'>
                <span className='font-semibold px-2'>Book ID</span>
                <br />
                
                <input
                  type="text"
                  placeholder="BookId"
                  className="input input-bordered"
                  // value={newBook.BookId}
                  {...register("BookId", { required: true })}
                // onChange={(e) => setNewBook({ ...newBook, BookId: e.target.value })}
                />
                <br />
                {errors.BookId && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2s'>
                <span className='font-semibold px-2'>Book Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Book Name "
                  className="input input-bordered"
                  // value={newBook.BookName}
                  {...register("BookName", { required: true })}
                // onChange={(e) => setNewBook({ ...newBook, BookName: e.target.value })}
                />
                <br />
                {errors.BookName && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2s'>
                <span className='font-semibold px-2'>Author Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Author Name"
                  className="input input-bordered"
                  // value={newBook.author}
                  {...register("author", { required: true })}
                // onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <br />
                {errors.author && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2s'>
                <span className='font-semibold px-2'>Category</span>
                <br />
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered"
                  // value={newBook.category}
                  {...register("category", { required: true })}
                // onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                />
                <br />
                {errors.category && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-2 space-y-2s'>
                <span className='font-semibold px-2'>Price</span>
                <br />
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  // value={newBook.price}
                  {...register("price", { required: true })}
                // onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
                />
                <br />
                {errors.price && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
            </div>
            <button className="btn btn-primary mt-4" >
              Add Book
            </button>
          </div>
        </form>

        <div className="bg-base-100 shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Book List</h2>
          {bookList.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                <tr>
                    <th>BookId</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
                   
              </thead>
                <tbody>
                  {bookList.map((book) => (
                    <tr key={book.BookId}>
                      <td>{book.BookId}</td>
                      <td>{book.BookName}</td>
                      <td>{book.author}</td>
                      <td>{book.category}</td>
                      <td>{book.price}</td>
                      <td>
                        <button
                          className="btn btn-error btn-sm"
                          onClick={() => handleRemoveBook(book.BookId)} 
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No books available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminAction;



  