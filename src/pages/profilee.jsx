import React from 'react';
import Profil from '../pages/profil/profil';
import Navbar from "../layouts/navbar"
import SideBar from "../layouts/dashboard"
const Profilee = () => {
    return (
        <>
            
           <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <Profil  />
           </div>
           
           </div>
       
           
            
          
        </>
    );
}

export default Profilee;
