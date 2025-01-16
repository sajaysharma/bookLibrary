import React from 'react'
import Login from './Login';
import { useForm } from 'react-hook-form';

function Contactpage() {
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    
        const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className="min-h-screen bg-white flex flex-col items-center justify-center space-y-12 p-8">
                {/* Contact Section */}
                <div className="w-full max-w-2x2 bg-blue-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2x2 font-bold text-xl text-blue-600 text-center mb-6">Contact Us</h2>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold mb-2">Message</label>
                            <textarea
                                placeholder="Enter your message"
                                className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                                rows="4"
                                {...register("text", { required: true })}
                            ></textarea>
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* About Section */}
                <div className="w-full max-w-2x2 bg-blue-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2x2 font-bold text-xl text-blue-600 text-center mb-6">About Us</h2>
                    <p className="text-blue-700 text-justify leading-relaxed">
                        Welcome to our library management system! Our mission is to provide students and faculty with an easy-to-use platform for managing books, newspapers, and new arrivals. We believe in fostering a love for reading and lifelong learning through efficient access to resources. Whether you're here to issue a book or stay updated on the latest arrivals, we're here to assist you.
                    </p>
                </div>
                <div className='text-white bg-pink-700 cursor-pointer px-3 py-3 items-center font-bold justify-items-center'>
                    <a href='/' className=''>Back</a>
                </div>
            </div>
        </>
    )
}

export default Contactpage;
