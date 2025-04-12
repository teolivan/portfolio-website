'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const page = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <h1 className='text-4xl font-bold mb-4 text-gray-700 text-center pt-8'>
                About
            </h1>
            <div className="flex justify-center px-4 py-8">
                <div className='max-w-3xl w-full bg-white p-6 rounded-xl shadow-lg text-gray-600 leading-relaxed text-center'>
                    <p className=''>
                        Hello!👋 My name is Olivia.  
                        I am studying my second year of the program     <a 
                            href="https://mau.se/sok-utbildning/program/tgsya/" 
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             Systems Engineering with a specialization in computer systems development
                        </a>   at Malmö Univerity.
                        <br />
                        <br />

                        I am interested in backend development, AI & machine learning, and electronics/robotics.  
                        I am more drawn to the lower-level stuff, and my aim is to gain enough knowledge to work within IoT or Robotics. 
                        <br />
                        <br />

                        During my free time, I enjoy spending time with family and friends, reading, painting, and hiking. 
                        <br />
                        <br />

                        I enjoy solving problems, so I like to do competitive programming, and let out my creative side making procedural art with p5js or Processing. 
                        <br />
                        <br />

                        My current focus is to gain more knowledge of embedded systems programming and AI.  
                    </p>
                    <br />
                    <p className='font-bold p-2'>
                        Linkedin: <a href="https://www.linkedin.com/in/olivia-svenssons/" className="text-blue-600 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer">https://www.linkedin.com/in/olivia-svenssons/</a>
                    </p>
                    <p className='font-bold p-2'>
                        Github: <a href="https://github.com/teolivan" className="text-blue-600 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer">https://github.com/teolivan</a>
                    </p>

                    <p className='font-bold p-2'>
                        Codewars: <a href="https://www.codewars.com/users/teolivan" className="text-blue-600 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer">https://www.codewars.com/users/teolivan</a>
                    </p>

                    <p className='font-bold p-2'>
                        Leetcode: <a href="https://leetcode.com/u/teoliva/" className="text-blue-600 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer">https://leetcode.com/u/teoliva/</a>
                    </p>

                    <p className='font-bold p-2'>
                        OpenProcessing: <a href="https://openprocessing.org/user/346710?view=sketches" className="text-blue-600 underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer">https://openprocessing.org/user/346710?view=sketches</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;