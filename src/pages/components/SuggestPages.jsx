import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Images } from "../../constant";


const SuggestPages = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold">Suggest Pages</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">See all</a>
      </div>

      <div className="space-y-6">
    
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src={Images.imggrp2}
            className="w-full h-36 object-cover rounded-lg mb-3"
          />
          <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-600 py-2 rounded-full hover:bg-gray-300 transition-all">
            <FiExternalLink />
            Like Page
          </button>
        </div>

        
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src={Images.imggrp1}
            className="w-full h-36 object-cover rounded-lg mb-3"
          />
          <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-600 py-2 rounded-full hover:bg-gray-300 transition-all">
            <FiExternalLink />
            Like Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestPages;
