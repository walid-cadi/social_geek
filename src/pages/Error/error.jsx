import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-error flex items-center justify-center flex-col gap-4'>
            <h1 className='text-white text-9xl font-bold'>ERROR 404</h1>
            <h1 className='text-white text-4xl font-bold'>PAGE NOT FOUND</h1>
            <button className='bg-white text-blue-600 font-bold text-lg py-2 px-8 rounded-full' onClick={() => navigate('/register')}>BACK</button>

        </div>
    );
};