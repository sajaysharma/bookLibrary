import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Newspapper from '../components/Newspapper.jsx';
import Newscard from '../components/Newscard.jsx';

function Newspoint() {
  return (
    <>
       <Navbar/>
       <div className='min-h-screen'>
        <Newspapper/>
        <Newscard/>
       </div>
       <Footer/>
    </>
  )
}

export default Newspoint;
