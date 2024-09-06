import React from 'react';
import Setting from '../pages/setting/setting';
import Navbar from "../layouts/navbar"
import SideBar from "../layouts/dashboard"
const Settings = () => {
    return (
        <>
            
           <>
           <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <Setting  />
           </div>
           
           </div>
           </>
       
           
            
          
        </>
    );
}

export default Settings;