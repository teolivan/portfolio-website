'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import ProjectsComponent from '../components/ProjectsComponent';

const page = () => {
    return (
        <div className='bg-gray-200 text-center'>
            <Navbar/>
            <h1
                className='text-4xl font-bold mb-4 text-gray-700 p-8'>My Projects</h1>
            <div className="flex justify-center px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
                    <ProjectsComponent title='Climate Measurer' 
                    role='Solo Project' 
                    description='IoT system using Raspberry Pi Pico, DHT11, MCP9700, and CdS sensors to monitor plant environment. 
                    Data is sent via MQTT to Adafruit IO, with LEDs indicating if conditions are good, okay, or bad. Built with MicroPython.' 
                    link='https://github.com/teolivan/LNU_IoT_project'/>
                    
                    <ProjectsComponent title='My Happy Plants' 
                    role='Group Project' 
                    description='Plant care and discovery web app built with Next.js, React, TailwindCSS, and Prisma, using the Perenual API. Includes unit testing with Jest.' 
                    link='https://myhappyplants.vercel.app/'/>

                    <ProjectsComponent title='Clarity Stocks' 
                    role='Group Project' 
                    description='A sleek stock tracking app built with Java, JavaFX, PostgreSQL, and Alpha Vantage API.
                    Features intuitive search, clean price chart visualizations, and simplified metrics with optional advanced analysis for deeper insights.' 
                    link='https://github.com/JoarEliasson/ClarityStocks'/>
                </div>
            </div>
        </div>
    );
};

export default page;