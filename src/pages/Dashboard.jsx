import React from 'react';

function Dashboard({ assignments = [], attendanceData = [], examsData = [], timetableData = [], setCurrentView }) {
  // 1. Calculate Live Overall Attendance Average
  const totalAttended = attendanceData.reduce((acc, curr) => acc + curr.attended, 0);
  const totalClasses = attendanceData.reduce((acc, curr) => acc + curr.total, 0);
  const overallAttendance = totalClasses > 0 ? Math.round((totalAttended / totalClasses) * 100) : 0;

  // 2. Count Pending Assignments
  const pendingCount = assignments.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Azfar! Here is your real-time academic overview.</p>
      </header>
      
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Attendance */}
        <div 
          onClick={() => setCurrentView('Attendance')}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-medium">Overall Attendance</h3>
            <span className="text-xs text-blue-600 font-semibold group-hover:underline">View All →</span>
          </div>
          <p className={`text-4xl font-bold ${overallAttendance >= 75 ? 'text-blue-600' : 'text-red-500'}`}>
            {overallAttendance}%
          </p>
          <p className="text-xs text-gray-400 mt-2">{totalAttended} of {totalClasses} classes attended</p>
        </div>
        
        {/* Pending Assignments */}
        <div 
          onClick={() => setCurrentView('Assignments')}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-medium">Pending Tasks</h3>
            <span className="text-xs text-orange-600 font-semibold group-hover:underline">Manage →</span>
          </div>
          <p className="text-4xl font-bold text-orange-500">{pendingCount}</p>
          <p className="text-xs text-gray-400 mt-2">Active tasks in queue</p>
        </div>

        {/* GPA Shortcut */}
        <div 
          onClick={() => setCurrentView('GPA Calculator')}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-medium">GPA Calculator</h3>
            <span className="text-xs text-green-600 font-semibold group-hover:underline">Open →</span>
          </div>
          <p className="text-2xl font-bold text-green-600 mt-1">Estimate CGPA</p>
          <p className="text-xs text-gray-400 mt-2">Calculate semester projection</p>
        </div>
      </div>

      {/* Dynamic Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Classes Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 border-b pb-3">
            <h3 className="text-lg font-bold text-gray-800">Weekly Classes</h3>
            <button 
              onClick={() => setCurrentView('Timetable')}
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Full Schedule
            </button>
          </div>
          <div className="space-y-3">
            {timetableData.slice(0, 3).map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.subject}</p>
                  <p className="text-xs text-gray-500">{item.day} • {item.time}</p>
                </div>
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {item.room}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent Pending Assignments Preview */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 border-b pb-3">
            <h3 className="text-lg font-bold text-gray-800">Urgent Assignments</h3>
            <button 
              onClick={() => setCurrentView('Assignments')}
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              View All
            </button>
          </div>
          {assignments.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-6">No pending assignments!</p>
          ) : (
            <div className="space-y-3">
              {assignments.slice(0, 3).map((task) => (
                <div key={task.id} className="flex justify-between items-center p-3 bg-orange-50/50 border border-orange-100 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.subject}</p>
                  </div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    Due: {task.dueDate}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;