import React from 'react';

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Azfar! Here is your academic overview.</p>
      </header>
      
      {/* Top Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Attendance Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 font-medium mb-1">Overall Attendance</h3>
          <p className="text-4xl font-bold text-blue-600">82%</p>
        </div>
        
        {/* GPA Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 font-medium mb-1">Current CGPA</h3>
          <p className="text-4xl font-bold text-green-500">3.42</p>
        </div>

        {/* Assignments Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 font-medium mb-1">Pending Assignments</h3>
          <p className="text-4xl font-bold text-orange-500">2</p>
        </div>
      </div>

      {/* Bottom Section Layout for Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Today's Classes</h3>
          <div className="flex items-center justify-center h-48 text-gray-400 border-2 border-dashed border-gray-100 rounded-lg">
            <p>Class list UI coming soon...</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Upcoming Exams</h3>
          <div className="flex items-center justify-center h-48 text-gray-400 border-2 border-dashed border-gray-100 rounded-lg">
            <p>Exam schedule UI coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;