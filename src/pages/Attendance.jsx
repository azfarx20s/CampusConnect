import React from 'react';
import { attendanceData } from '../data/mockData';

function Attendance() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Attendance Tracker</h1>
        <p className="text-gray-500 mt-1">Monitor your class presence and requirements.</p>
      </header>

      <div className="space-y-6">
        {attendanceData.map((record) => {
          // Calculate the percentage and round it to a whole number
          const percentage = Math.round((record.attended / record.total) * 100);
          
          // Determine the color of the bar based on the percentage
          let barColor = 'bg-green-500';
          if (percentage < 75) barColor = 'bg-red-500';
          else if (percentage < 85) barColor = 'bg-yellow-500';

          return (
            <div key={record.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{record.subject}</h3>
                  <p className="text-sm text-gray-500">
                    {record.attended} / {record.total} Classes Attended
                  </p>
                </div>
                <span className={`text-xl font-bold ${percentage >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                  {percentage}%
                </span>
              </div>
              
              {/* The Background Track */}
              <div className="w-full bg-gray-100 rounded-full h-3 mt-4 overflow-hidden">
                {/* The Colored Progress Bar */}
                <div 
                  className={`h-3 rounded-full ${barColor} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Attendance;