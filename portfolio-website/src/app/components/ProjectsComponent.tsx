'use client';
import Link from 'next/link';
import React from 'react';


type Props = {
    title : string;
    role : string;
    description : string;
    link : string;
};

const ProjectsComponent = ({title, role, description, link} : Props) => {
    return (
            <div className='w-90 h-70 bg-gray-200 rounded-xl border-2 border-cyan-900 transition-all duration-300 ease-in-out transform hover:scale-105 p-5'>
                <h1 className='text-2xl font-bold mb-4 text-gray-700'>
                    {title}
                </h1>
                <h2 className='text-xl font-light mb-4 text-gray-700'>
                    {role}
                </h2>
                <p className='text-gray-600 text-sm'>
                    {description}
                </p>
                <Link
                    className="block text-sm text-cyan-700 mt-4 hover:underline"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View more →
                </Link>

            </div>
    );
};

export default ProjectsComponent;

