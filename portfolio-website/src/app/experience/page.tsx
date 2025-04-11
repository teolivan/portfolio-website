'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import ExperienceComponent from '../components/ExperienceComponent';

const page = () => {
    return (
        <div className='bg-gray-200 text-center'>
            <Navbar/>
            <h1
                className='text-4xl font-bold mb-4 text-gray-700 p-8'>Work Experience</h1>
            <div className="flex justify-center px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
                    <ExperienceComponent title='Student Brand Manager' 
                    company='Cygni, part of Accenture' 
                    description='Work as a Student Brand Manager for Cygni, which is
                    part of Accenture, in Malmö. I represent Cygni at
                    different events, and partake in activities and
                    courses they have within the company.' 
                    link='https://cygni.se/'/>
                    
                    <ExperienceComponent
                    title="Team Lead"
                    company="Hello World!"
                    description="Work as a team lead and a teacher in programming.
                    Hello World! is a non-profit organization which helps
                    women and socioeconomically marginalized groups
                    get into programming."
                    link="https://www.helloworld.se/"
                    />  

                    <ExperienceComponent
                    title="Program Representative"
                    company="Malmoe University"
                    description="I am a program representative at the technological
                    faculty of Malmö University. I represent my program
                    System Development and am responsible for course
                    feedback and student representation."
                    link="https://mau.se/sok-utbildning/program/tgsya/"
                    />

                      <ExperienceComponent
                    title="Private Teacher"
                    company="Studybuddy"
                    description="Work as a private teacher/tutor for children,
                    teenagers and adults. The work involves teaching
                    programming (Java, databases, SQL, python, Flask,
                    JavaScript, HTML & CSS) and mathematics."
                    link="https://studybuddy.se/"
                    />    

                    <ExperienceComponent
                    title="Internship"
                    company="Hulo AB"
                    description="I
                    helped create an application for uploading and
                    sorting documents by using artificial intelligence
                    for an American company called Octane. I worked
                    with React (JavaScript), Django (Python) and
                    Tensorflow (Python, AI & machine learning). "
                    link="https://www.allabolag.se/foretag/hulo-consulting-ab/malm%C3%B6/internet-konsulter-operat%C3%B6rer/2KIAD8WI5YFHL"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;