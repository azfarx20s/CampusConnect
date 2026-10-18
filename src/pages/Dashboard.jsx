import React from 'react';

function Dashboard({ assignments = [], attendanceData = [], examsData = [], timetableData = [], setCurrentView }) {
  const totalAttended = attendanceData.reduce((acc, curr) => acc + curr.attended, 0);
  const totalClasses = attendanceData.reduce((acc, curr) => acc + curr.total, 0);
  const overallAttendance = totalClasses > 0 ? Math.round((totalAttended / totalClasses) * 100) : 0;
  const pendingCount = assignments.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, Azfar! Here is your real-time academic overview.</p>
      </header>
      
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance Card */}
        <div 
          onClick={() => setCurrentView('Attendance')}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 dark:text-gray-400 font-medium">Overall Attendance</h3>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">View All →</span>
          </div>
          <p className={`text-4xl font-bold ${overallAttendance >= 75 ? 'text-blue-600 dark:text-blue-400' : 'text-red-500'}`}>
            {overallAttendance}%
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{totalAttended} of {totalClasses} classes attended</p>
        </div>
        
        {/* Pending Tasks Card */}
        <div 
          onClick={() => setCurrentView('Assignments')}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 dark:text-gray-400 font-medium">Pending Tasks</h3>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold group-hover:underline">Manage →</span>
          </div>
          <p className="text-4xl font-bold text-orange-500">{pendingCount}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Active tasks in queue</p>
        </div>

        {/* GPA Shortcut Card */}
        <div 
          onClick={() => setCurrentView('GPA Calculator')}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 dark:text-gray-400 font-medium">GPA Calculator</h3>
            <span className="text-xs text-green-600 dark:text-green-400 font-semibold group-hover:underline">Open →</span>
          </div>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">Estimate CGPA</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Calculate semester projection</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4 border-b dark:border-gray-700 pb-3">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Weekly Classes</h3>
            <button onClick={() => setCurrentView('Timetable')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">Full Schedule</button>
          </div>
          <div className="space-y-3">
            {timetableData.slice(0, 3).map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{item.subject}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.day} • {item.time}</p>
                </div>
                <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                  {item.room}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4 border-b dark:border-gray-700 pb-3">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Urgent Assignments</h3>
            <button onClick={() => setCurrentView('Assignments')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">View All</button>
          </div>
          {assignments.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-6">No pending assignments!</p>
          ) : (
            <div className="space-y-3">
              {assignments.slice(0, 3).map((task) => (
                <div key={task.id} className="flex justify-between items-center p-3 bg-orange-50/50 dark:bg-gray-700/50 border border-orange-100 dark:border-gray-700 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{task.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{task.subject}</p>
                  </div>
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/40 px-2 py-1 rounded">
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