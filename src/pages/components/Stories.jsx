import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

export const StoriesSection = () => {
    
    const [stories, setStories] = useState([]);

    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newStory = {
                id: stories.length + 1,
                name: "Your Story", 
                image: URL.createObjectURL(file), 
            };
            setStories([...stories, newStory]);
        }
    };

    
    const handleAddStoryClick = () => {
        document.getElementById('file-input').click();
    };

    return (
        <div className="flex items-center space-x-4 overflow-x-auto p-4">
            
            <div
                className="relative w-28 h-44 flex-shrink-0 rounded-lg bg-gray-200 flex flex-col justify-center items-center text-center cursor-pointer"
                onClick={handleAddStoryClick}
            >
                <div className="bg-white p-4 rounded-full">
                    <FiPlus className="text-blue-500 text-lg" />
                </div>
                <p className="mt-2 text-sm font-semibold text-gray-500">Add Story</p>
            </div>

            
            <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            {/* Loop stories */}
            {stories.map((story, index) => (
                <div key={index} className="relative w-28 h-44 flex-shrink-0 rounded-lg bg-gray-200 overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-full h-36 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-2 text-center">
                        <p className="text-white text-sm font-semibold">{story.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
