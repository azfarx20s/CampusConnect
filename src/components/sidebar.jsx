import React from 'react';

function Sidebar({ currentView, setCurrentView, darkMode, setDarkMode }) {
  const menuItems = ['Dashboard', 'Subjects', 'Timetable', 'Assignments', 'Attendance', 'Exams', 'Resources', 'GPA Calculator'];

  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-800 h-screen flex flex-col shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CampusConnect</h2>
      </div>
      
      {/* Navigation links */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button 
            key={item}
            onClick={() => setCurrentView(item)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              currentView === item 
                ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Theme Toggle & User Info */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 space-y-3">
        {/* Dedicated Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
          <span className="text-xs bg-white dark:bg-gray-900 px-2 py-0.5 rounded shadow-xs">
            {darkMode ? 'ON' : 'OFF'}
          </span>
        </button>

        <div className="flex items-center gap-3 pt-1">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center font-bold">
            A
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100">Azfar Qadri</p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;