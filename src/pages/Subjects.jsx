import React from 'react';
import { subjectsData } from '../data/mockData';

function Subjects() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Enrolled Subjects</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Course details and instructor information.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsData && subjectsData.length > 0 ? (
          subjectsData.map((subject) => (
            <div key={subject.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full">
                  {subject.code}
                </span>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-3 mb-1">{subject.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Instructor: {subject.instructor}</p>
              </div>
              <div className="pt-4 border-t border-gray-50 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>Credit Hours: {subject.credits}</span>
                <span>Room: {subject.room}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No subjects available.</p>
        )}
      </div>
    </div>
  );
}

export default Subjects;