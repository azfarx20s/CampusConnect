import React from 'react';
import { attendanceData } from '../data/mockData';

function Attendance() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Attendance Tracker</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Monitor your class presence and requirements.</p>
      </header>

      <div className="space-y-6">
        {attendanceData.map((record) => {
          const percentage = Math.round((record.attended / record.total) * 100);
          let barColor = 'bg-green-500';
          if (percentage < 75) barColor = 'bg-red-500';
          else if (percentage < 85) barColor = 'bg-yellow-500';

          return (
            <div key={record.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{record.subject}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {record.attended} / {record.total} Classes Attended
                  </p>
                </div>
                <span className={`text-xl font-bold ${percentage >= 75 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {percentage}%
                </span>
              </div>
              
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 mt-4 overflow-hidden">
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