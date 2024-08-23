// components/InstructorDashboard.tsx
import React from "react";
import Link from "next/link";

const StudentDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className=" p-4">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <h2 className="text-gray-700 font-semibold">
          View your earned tokens and class attendance.
        </h2>

        <p className="pt-10">select a Student</p>
        <select className="bg-gray-100 text-black w-full mt-2 p-2 rounded-lg">
          <option>John Doe</option>
          <option>Jane Smith</option>
          <option>Bob Johnson</option>
        </select>

        <div className="flex flex-col-2 pt-10">
          <div>
            <p className="text-5xl font-bold">5</p>
            <p className="pt-2">Tokens</p>
          </div>
          <div>
            <a href="/attendance" className="flex ">
              <div className="text-black bg-slate-200 px-4 py-2 rounded hover:bg-gray-50">
                View Attendance
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
