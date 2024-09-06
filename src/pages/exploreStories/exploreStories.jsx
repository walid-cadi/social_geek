import React from 'react';
import { StoriesSection } from '../components/Stories';
import { Images, JsonData } from "../../constant";

const ExploreStories = () => {
    const stories = [
        { id: 1, name: 'nassima ', image: 'https://images.unsplash.com/photo-1709321954258-698bea8a21e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'zineb benabou', image: 'https://images.unsplash.com/photo-1725109432339-d4c815f517bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'walid cadi', image: 'https://images.unsplash.com/photo-1524109778675-a86c515079cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'achraf', image: 'https://images.unsplash.com/photo-1712543322587-728f5624d723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];
    
    return (
        <>
        <div>
          <StoriesSection/>  
        </div>
        <div className='flex gap-4 justify-center pt-5'>
        {stories.map((story, index) => (
                <div key={index} className="relative w-28 h-44 flex-shrink-0 rounded-lg bg-gray-200 overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-48 h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 p-2 text-center">
                        <p className="text-white text-sm font-semibold">{story.name}</p>
                    </div>
                </div>
            ))}
        </div>
      
        </>
    
    );
};

export default ExploreStories;