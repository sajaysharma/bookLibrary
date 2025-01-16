import React from 'react';

function Bookstatus() {
  const bookData = [
    { id: 101, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', issueDate: '2025-01-10', returnDate: '2025-01-20', status: 'Issued' },
    { id: 203, title: 'Clean Code', author: 'Robert C. Martin', issueDate: '2025-01-05', returnDate: '2025-01-15', status: 'Returned' },
    { id: 304, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', issueDate: '2025-01-12', returnDate: '2025-01-22', status: 'Issued' },
  ];

  return (
    <div className="mt-7 bg-white flex items-center justify-center p-8 dark:bg-slate-900 dark:text-black">
      <div className="w-full max-w-4x2 bg-blue-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Book Status</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">StudentId</th>
                <th className="p-4 text-left">Book Title</th>
                <th className="p-4 text-left">Author</th>
                <th className="p-4 text-left">Issue Date</th>
                <th className="p-4 text-left">Return Date</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookData.map((book) => (
                <tr key={book.id} className="hover:bg-blue-100">
                  <td className="p-4">{book.id}</td>
                  <td className="p-4">{book.title}</td>
                  <td className="p-4">{book.author}</td>
                  <td className="p-4">{book.issueDate}</td>
                  <td className="p-4">{book.returnDate}</td>
                  <td className={`p-4 font-semibold ${book.status === 'Issued' ? 'text-pink-500' : 'text-green-600'}`}>{book.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bookstatus;
