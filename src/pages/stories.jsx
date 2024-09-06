import React from 'react';
import Navbar from "../layouts/navbar"
import SideBar from "../layouts/dashboard"
import ExploreStories from './exploreStories/exploreStories';

const Stories = () => {
    return (
        <>
              <div>
           <Navbar />
           <div className="flex">
           <SideBar />
            <ExploreStories />
           </div>
           
           </div> 
        </>
    );
}

export default Stories;
