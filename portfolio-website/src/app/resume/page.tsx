'use client';
import React from 'react';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <div>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <iframe
        src="resume.pdf"
        className="w-full h-[90vh] max-w-4xl border shadow-lg"
        title="Resume"
      />
    </div>
    </div>
  );
};

export default page;