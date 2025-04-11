'use client';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-200'>
            <div className="text-center">
                <h1
                    className={`text-4xl font-bold mb-4 text-gray-700 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Welcome to my portfolio!
                </h1>
                <p
                    className={`text-gray-600 transition-all duration-1200 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Hello!👋 My name is Olivia, and I am a second year student at Malmoe University, studying systems engineering.
                </p>
            </div>
        </div>
    ); 
};

export default Home;
