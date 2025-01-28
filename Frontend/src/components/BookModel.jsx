import React from 'react'
import { Link } from 'react-router-dom';

function BookModel() {
    return (
        <>
            {/* Put this part before </body> tag */}
            <div >
                <dialog className='modal' id='my_modal_8'>
                <div className="modal-box">
                    <div className="card lg:card-side bg-base-100 shadow-xl"> 
                            <Link 
                                to='/book' 
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_8").close()}
                            >
                                ✕
                            </Link>
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                </div>
                </dialog>
            </div>
        </>
    )
}

export default BookModel;
