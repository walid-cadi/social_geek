import React from 'react';
import Market from './market/market';
import SideBar from '../layouts/dashboard';
import Navbar from '../layouts/navbar';

const Markett = () => {
    return (
        <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <Market />
           </div>
           
           </div>
    );
}

export default Markett;
