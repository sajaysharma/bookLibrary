import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';


function Signup() {
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            contact: data.contact,
            password: data.password,
        };
        await axios
            .post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup Succesfull!');
                    Navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(data));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error :" + err.response.data.message);
                }
            });
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div id="" className="border shadow-md p-5 rounded-md">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="div">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg">Register</h3>
                            <div className='mt-4 space-y-2s'>
                                <span>Student Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className='mt-10 space-y-2s'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your email'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Mobile number */}
                            <div className='mt-10 space-y-2s'>
                                <span>Contact Number</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your mobile number'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("contact", { required: true })}
                                />
                                <br />
                                {errors.contact && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-10 space-y-2s'>
                                <span>Password</span>
                                <br />
                                <input type="Password"
                                    placeholder='Enter your password'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-10'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700' >Signup</button>
                                <p>
                                    Have an account
                                    <a className="text-blue-700 underline cursor-pointer"
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login</a>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;