import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";
// import list from '../../public/list.json';
import { Link } from 'react-router-dom';

function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async() => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[]);
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto  dark:bg-slate-900 dark:text-white'>
                <div className='mt-28 items-center justify-center text-center  dark:bg-slate-900 dark:text-white'>
                    <h1 className='text-2xl font-semibold md:text-4xl' >
                        We're delighted to have you <span className='text-pink-500'> here!! :) </span>
                    </h1>
                    <p className='py-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore nisi
                        repudiandae a aperiam quasi quam doloribus, ducimus quos quae deleniti consectetur
                        suscipit magni facilis at maxime beatae nostrum nobis. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Labore quidem earum consectetur natus eveniet,
                        adipisci saepe error sapiente dolore libero?
                    </p>
                    <Link to="/">
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Course
