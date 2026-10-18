import React from 'react';
import { examsData } from '../data/mockData';

function Exams() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Upcoming Exams</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Keep track of your midterms and finals.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examsData.map((exam) => {
          const dateParts = exam.date.split(' ');
          const month = dateParts[0];
          const day = dateParts[1].replace(',', '');

          return (
            <div key={exam.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow flex items-start gap-5">
              <div className="bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 p-3 rounded-lg text-center min-w-[80px]">
                <span className="block text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{month}</span>
                <span className="block text-3xl font-bold text-gray-800 dark:text-white mt-1">{day}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exam.subject}</h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <p><span className="font-medium text-gray-700 dark:text-gray-200">Time:</span> {exam.time}</p>
                  <p><span className="font-medium text-gray-700 dark:text-gray-200">Room:</span> {exam.room}</p>
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