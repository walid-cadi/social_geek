import React from 'react';
import Home from './home';
import Navbar from "../layouts/navbar"
import SideBar from "../layouts/dashboard"
const Homepage = () => {
    return (
        <>
               <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <Home  />
           </div>
           
           </div>
        </>
    );
}

export default Homepage;
