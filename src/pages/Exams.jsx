import React from 'react';
import { examsData } from '../data/mockData';

function Exams() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Upcoming Exams</h1>
        <p className="text-gray-500 mt-1">Keep track of your midterms and finals.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examsData.map((exam) => {
          // Split the date string (e.g., "Oct 15, 2026") to style the month and day separately
          const dateParts = exam.date.split(' ');
          const month = dateParts[0];
          const day = dateParts[1].replace(',', '');

          return (
            <div key={exam.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-5">
              {/* Calendar Date Block */}
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-center min-w-[80px]">
                <span className="block text-sm font-bold text-blue-600 uppercase tracking-wider">{month}</span>
                <span className="block text-3xl font-bold text-gray-800 mt-1">{day}</span>
              </div>
              
              {/* Exam Details */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{exam.subject}</h2>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Time:</span> {exam.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Room:</span> {exam.room}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exams;