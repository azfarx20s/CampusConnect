import React from 'react';

// We added props (currentView, setCurrentView) to talk to App.jsx
function Sidebar({ currentView, setCurrentView }) {
  const menuItems = ['Dashboard', 'Subjects', 'Timetable', 'Assignments', 'Attendance', 'Exams', 'Resources', 'GPA Calculator'];

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-blue-600">CampusConnect</h2>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button 
            key={item}
            onClick={() => setCurrentView(item)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              currentView === item 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
            A
          </div>
          <div>
            <p className="font-semibold text-gray-800">Azfar Qadri</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;