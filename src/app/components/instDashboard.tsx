// components/InstructorDashboard.tsx
import React from 'react';
import Link from 'next/link';

const InstructorDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
        <div className=" p-4">
      <h1 className='text-3xl font-bold'>Instructor Dashboard</h1>
      <h2 className='text-gray-700 font-semibold'>Mark student attendance and award tokens</h2>

      <p className='pt-10'>select a class</p>
        <select className='bg-gray-100 text-black w-full mt-2 p-2 rounded-lg'>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
        </select>

        <p className='pt-10'>Date</p>
        <input type="date" className='bg-gray-100 text-black w-full mt-2 p-2 rounded-lg'/>
      </div>
    </div>
  );
}

export default InstructorDashboard;
