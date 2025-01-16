import React from 'react'
import Footer from '../components/Footer';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import Bookstatus from '../components/Bookstatus';
function Bookissue() {
  return (
    <>
       <Navbar/>
       <div className='min-h-screen'>
       <Book/>
       <Bookstatus/>
       </div>
       <Footer/>    
    </>
  )
}

export default Bookissue;
