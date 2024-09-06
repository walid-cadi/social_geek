import React from 'react';
import { Post } from './components/post';
import RightBar from './components/rightbar';
import { StoriesSection } from './components/Stories';



const Home = () => {
  return (
    
    <div className='flex gap-x-5'>
      <div className='p-2'>
        <StoriesSection/>
        <Post/>
       </div>
       <div className=''>
        <RightBar/>
       </div>
       
    </div>
  );
};

export default Home;
