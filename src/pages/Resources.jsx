import React from 'react';

const resourcesData = [
  {
    id: 1,
    title: 'Software Engineering Syllabus 2026',
    category: 'Curriculum',
    type: 'PDF Document',
    size: '2.4 MB'
  },
  {
    id: 2,
    title: 'University Student Portal',
    category: 'Official Portal',
    type: 'External Link',
    size: 'Web Link'
  },
  {
    id: 3,
    title: 'Database Systems Past Papers (2021-2025)',
    category: 'Exam Prep',
    type: 'ZIP Archive',
    size: '14.8 MB'
  },
  {
    id: 4,
    title: 'Mobile App Development Lab Manual',
    category: 'Lab Guide',
    type: 'PDF Document',
    size: '5.1 MB'
  },
  {
    id: 5,
    title: 'Digital Library & Research Papers',
    category: 'Research',
    type: 'External Link',
    size: 'Web Link'
  },
  {
    id: 6,
    title: 'Web Engineering Project Guidelines',
    category: 'Coursework',
    type: 'PDF Document',
    size: '1.2 MB'
  }
];

function Resources() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Academic Resources</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Access study materials, past papers, syllabus copies, and university portals.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcesData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {item.size}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.type}</p>
            </div>
            
            <div className="pt-5 mt-4 border-t border-gray-100 dark:border-gray-700">
              <button 
                onClick={() => alert(`Opening ${item.title}`)}
                className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                <span>Access Resource</span> →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;