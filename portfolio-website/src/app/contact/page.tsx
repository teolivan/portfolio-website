'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const page = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <h1 className='text-4xl font-bold mb-4 text-gray-700 text-center pt-8'>
                Contact
            </h1>
            <div className="flex justify-center px-4 py-8">
                <div className='max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg text-gray-600 leading-relaxed text-center'>

                    <p className='font-bold p-2'>Phone: <span className='font-medium'>+46 76-301 05 64</span></p>
                    <p className='font-bold p-2'>Email: <span className='font-medium'>oliviateoliva@gmail.com</span></p>
                    <p className='font-bold p-2'>
                        Linkedin: <a href="https://www.linkedin.com/in/olivia-svenssons/" className="text-blue-600 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer">https://www.linkedin.com/in/olivia-svenssons/</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;