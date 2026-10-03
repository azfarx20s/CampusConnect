import React from 'react';
import { subjectsData } from '../data/mockData';

function Subjects() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Subjects</h1>
        <p className="text-gray-500 mt-1">Manage your current semester courses.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsData.map((subject) => (
          <div key={subject.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800 leading-tight pr-4">{subject.name}</h2>
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                {subject.code}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium text-gray-700">Teacher:</span> {subject.teacher}</p>
              <p><span className="font-medium text-gray-700">Credit Hours:</span> {subject.credits}</p>
            </div>
            <button className="mt-6 w-full bg-gray-50 hover:bg-blue-50 text-blue-600 font-medium py-2 rounded-lg transition-colors border border-gray-200 hover:border-blue-200">
              View Resources
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;