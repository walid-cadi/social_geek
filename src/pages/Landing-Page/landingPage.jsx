import React, { useState, useEffect } from 'react';
import { Images } from "../../constant";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('theme') === 'dark' || false
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <div>
                <nav className="fixed w-full z-20 top-0 start-0 mt-5 ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                        <div>
                            <div className="flex items-center ps-5 pe-20">
                                <a href="/" className="flex items-center text-blue-600">
                                    <img src={Images.logo} className="w-[25px] pt-1" alt="" />
                                    <span className="ml-2 font-bold text-2xl">SocialGeek.</span>
                                </a>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 text-center"  onClick={() => navigate('/login')}>Login</button>
                                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 text-center" onClick={() => navigate('/register')}>Sign-Up</button>
                                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center" onClick={toggleDarkMode}>
                                    {darkMode ? (
                                        <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
            <div className='flex justify-around mt-[23vh] items-center w-full ps-12'>
                <div className='w-[48%] flex flex-col gap-4'>
                    <div>
                        <h1 className='title-h1 text-6xl font-bold text-[#162e55]'>Welcome to <span className='text-[#fac651] spaning'>SocialGeek</span> Your Hub for Social Media Mastery!</h1>
                    </div>
                    <div>
                        <p className='text-gray-400 pg'>
                            Welcome to SocialGeek, where social media innovation meets effortless management! Whether
                            you're a seasoned marketer or just starting to explore the dynamic world of social media,
                            SocialGeek is designed to elevate your online presence and streamline your strategy.
                           
                        </p>
                    </div>
                    <div>
                        <a href="" className='border-b-2 border-blue-600 text-gray-600 link-dark'>Learn more</a>
                    </div>
                </div>
                <div>
                    <img src={Images.landing} className="w-[33vw] pt-1" alt="" />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
