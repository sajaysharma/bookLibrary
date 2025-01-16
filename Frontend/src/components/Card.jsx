import React from 'react';

function Card({item}) {
    // console.log(item);
    return (
        <>
            <div className='my-4 p-3'>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-900 dark:text-white dark:bg-slate-900 dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p> {item.title} </p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Lorem</div>
                            <div className="cursor-pointer px-5 py-3 badge badge-outline hover:bg-pink-500  hover:text-white duration-200">Read</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
