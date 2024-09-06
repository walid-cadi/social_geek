import React from 'react';
import { Groups } from './groups/Groups';
import Navbar from "../layouts/navbar"
import SideBar from "../layouts/dashboard"
const Grouppage = () => {
    return (
        <>
            <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <Groups  />
           </div>
           
           </div>
        </>
    );
}

export default Grouppage;
