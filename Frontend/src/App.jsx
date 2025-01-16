import React from 'react';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './Course/courses';
import Signup from './components/Signup';
import Bookissue from './Issueboook/Bookissue';
import Newspoint from './News/Newspoint';
import Arrival from './Arrival/Arrival.jsx';
// import contact from './components/contact.jsx';
import Contactpage from './components/Contactpage.jsx';


function App() {
  return (
   <>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/course" element = {<Courses/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/book" element = {<Bookissue/>}/>
        <Route path = "/newspapper" element = {<Newspoint/>}/>
        <Route path = "/newarrival" element = {<Arrival/>}/>
        <Route path = "/contact" element = {<Contactpage/>}/>
     </Routes>
     </div>
   </>
  );
}

export default App;
