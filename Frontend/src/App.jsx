import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './Course/courses';
import Signup from './components/Signup';
import Bookissue from './Issueboook/Bookissue';
import Newspoint from './News/Newspoint';
import Arrival from './Arrival/Arrival.jsx';
import { Toaster } from 'react-hot-toast';
import Contactpage from './components/Contactpage.jsx';
import { useAuth } from "./context/AuthProvider";
import AdminAction from './Admin/AdminAction.jsx';


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
   <>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/course" element = {authUser ? <Courses/> : <Navigate to = "/signup"/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/book" element = {<Bookissue/>}/>
        <Route path = "/newspapper" element = {<Newspoint/>}/>
        <Route path = "/newarrival" element = {<Arrival/>}/>
        <Route path = "/contact" element = {<Contactpage/>}/>
        <Route path = "/admin" element = {<AdminAction/>}/>
     </Routes>
     <Toaster />
     </div>
   </>
  );
}

export default App;
