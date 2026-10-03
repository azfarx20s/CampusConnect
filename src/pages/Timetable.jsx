import React from 'react';
import { timetableData } from '../data/mockData';

function Timetable() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Weekly Timetable</h1>
        <p className="text-gray-500 mt-1">Your class schedule for the week.</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-semibold text-gray-600">Day</th>
                <th className="p-4 font-semibold text-gray-600">Time</th>
                <th className="p-4 font-semibold text-gray-600">Subject</th>
                <th className="p-4 font-semibold text-gray-600">Room</th>
              </tr>
            </thead>
            <tbody>
              {timetableData.map((session) => (
                <tr key={session.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{session.day}</td>
                  <td className="p-4 text-gray-600">{session.time}</td>
                  <td className="p-4 text-blue-600 font-medium">{session.subject}</td>
                  <td className="p-4 text-gray-500">{session.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Timetable;