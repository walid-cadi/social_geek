import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

export const StoriesSection = () => {
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null); // To track the selected story
    
    const storiess = [
        { id: 1, name: 'nassima', image: 'https://images.unsplash.com/photo-1709321954258-698bea8a21e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'zineb benabou', image: 'https://images.unsplash.com/photo-1725109432339-d4c815f517bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'walid cadi', image: 'https://images.unsplash.com/photo-1524109778675-a86c515079cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'achraf', image: 'https://images.unsplash.com/photo-1712543322587-728f5624d723?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];

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

    const handleStoryClick = (story) => {
        setSelectedStory(story);
    };

    const closeStoryModal = () => {
        setSelectedStory(null);
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
                <div
                    key={index}
                    className="relative w-28 h-44 flex-shrink-0 rounded-lg bg-gray-200 overflow-hidden cursor-pointer"
                    onClick={() => handleStoryClick(story)}
                >
                    <img src={story.image} alt={story.name} className="w-full h-36 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-2 text-center">
                        <p className="text-white text-sm font-semibold">{story.name}</p>
                    </div>
                </div>
            ))}

            {storiess.map((story, index) => (
                <div
                    key={index}
                    className="relative w-28 h-44 flex-shrink-0 rounded-lg bg-gray-200 overflow-hidden cursor-pointer"
                    onClick={() => handleStoryClick(story)}
                >
                    <img src={story.image} alt={story.name} className="w-48 h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 p-2 text-center">
                        <p className="text-white text-sm font-semibold">{story.name}</p>
                    </div>
                </div>
            ))}

            {/* Modal*/}
            {selectedStory && (
                <div className="fixed inset-0  flex items-center justify-center z-10">
                    <div className="bg-gray-100 p-1 rounded-lg relative ">
                        <button
                            onClick={closeStoryModal}
                            className="absolute top-3 right-5 text-gray-700 text-lg font-bold"
                        >
                            X
                        </button>
                        <img src={selectedStory.image} alt={selectedStory.name} className="w-[20vw] h-96" />
                        <p className="text-center mt-2">{selectedStory.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
