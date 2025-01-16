import React from 'react';

function Book() {
    return (
        <>
            <div className="min-h-screen bg-white flex items-center justify-center dark:bg-slate-900 dark:text-white">
                <div className="w-full max-w-md bg-blue-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2x1 font-bold text-blue-600 text-center mb-6">Issue / Submit Book</h2>

                    <form className="space-y-4">
                        {/* Student ID Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Student ID</label>
                            <input
                                type="text"
                                placeholder="Enter your Student ID"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* Book ID Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Book ID</label>
                            <input
                                type="text"
                                placeholder="Enter the Book ID"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
                            >
                                Issue Book
                            </button>
                            <button
                                type="button"
                                className="btn bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
                            >
                                Submit Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Book;
