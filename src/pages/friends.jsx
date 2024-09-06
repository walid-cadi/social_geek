import React from 'react';
import Friend_request from './Friend Request/friend_request';
import Navbar from "../layouts/navbar"
import SideBar from "../layouts/dashboard"
const Friends = () => {
    return (
        <>
            <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <Friend_request />
           </div>
           
           </div>
        </>
    );
}

export default Friends;
