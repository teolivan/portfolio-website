'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const Page = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <h1 className='text-4xl font-bold mb-4 text-gray-700 text-center pt-8'>
                Contact
            </h1>
            <div className="flex justify-center px-4 py-8">
                <div className='max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg text-gray-600 leading-relaxed text-center'>

                    <p className='font-bold p-2 flex items-center justify-center'>
                        <img
                            src="phone.svg"
                            alt="Phone icon"
                            className="h-8 mr-2 align-baseline"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(25%) sepia(19%) saturate(586%) hue-rotate(178deg) brightness(93%) contrast(96%)',
                            }}
                        />
                        <span className='font-medium'>+46 76-301 05 64</span>
                    </p>

                    <p className='font-bold p-2 flex items-center justify-center'>
                        <img
                            src="email.svg"
                            alt="Email icon"
                            className="h-10 mr-2 align-baseline"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(25%) sepia(19%) saturate(586%) hue-rotate(178deg) brightness(93%) contrast(96%)',
                            }}
                        />
                        <span className='font-medium'>oliviateoliva@gmail.com</span>
                    </p>

                    <p className='font-bold p-2 flex items-center justify-center'>
                        <a href="https://www.linkedin.com/in/olivia-svenssons/" className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">
                            <img
                                src="linkedin.svg"
                                alt="Linkedin icon"
                                className="h-10 mr-2 align-baseline"
                                style={{
                                    filter: 'brightness(0) saturate(100%) invert(25%) sepia(19%) saturate(586%) hue-rotate(178deg) brightness(93%) contrast(96%)',
                                }}
                            />
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Page;
