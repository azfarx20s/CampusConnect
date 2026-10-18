import React from 'react';
import { timetableData } from '../data/mockData';

function Timetable() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Weekly Timetable</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Schedule for lectures and lab sessions.</p>
      </header>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Day</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Subject</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Time</th>
              <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Room</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 dark:border-gray-700">
                <td className="p-4 font-medium text-gray-800 dark:text-white">{item.day}</td>
                <td className="p-4 text-gray-700 dark:text-gray-200">{item.subject}</td>
                <td className="p-4 text-gray-600 dark:text-gray-400">{item.time}</td>
                <td className="p-4 text-gray-600 dark:text-gray-400">{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Timetable;