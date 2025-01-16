import React from 'react';

function Newspapper() {
    return (

        <>
            <div className="min-h-screen bg-white flex items-center justify-center dark:bg-slate-900 dark:text-white">
                <div className="w-full max-w-2xl bg-blue-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Newspaper Management</h2>

                    <form className="space-y-4">
                        {/* Newspaper Name Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Newspaper Name</label>
                            <input
                                type="text"
                                placeholder="Enter Newspaper Name"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* Issue Date Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Issue Date</label>
                            <input
                                type="date"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
                            >
                                Add Newspaper
                            </button>
                            <button
                                type="button"
                                className="btn bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
                            >
                                Remove Newspaper
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Newspapper;
