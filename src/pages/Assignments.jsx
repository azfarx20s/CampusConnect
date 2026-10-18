import React, { useState } from 'react';

function Assignments({ assignments, setAssignments }) {
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Mobile Application Development');
  const [newDueDate, setNewDueDate] = useState('');

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (!newTitle || !newDueDate) return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      subject: newSubject,
      dueDate: newDueDate,
      status: 'Pending'
    };

    setAssignments([...assignments, newTask]);
    setNewTitle('');
    setNewDueDate('');
  };

  const handleDelete = (id) => {
    setAssignments(assignments.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Assignments</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Track deadlines and complete coursework.</p>
      </header>

      {/* Add Assignment Form */}
      <form onSubmit={handleAddAssignment} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input 
          type="text" 
          placeholder="Assignment Title" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select 
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          className="p-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option>Mobile Application Development</option>
          <option>Software Engineering</option>
          <option>Web Engineering</option>
          <option>Database Systems</option>
        </select>
        <input 
          type="text" 
          placeholder="Due Date (e.g. Oct 20)" 
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
          className="p-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white font-medium p-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Task
        </button>
      </form>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((task) => (
          <div key={task.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{task.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{task.subject} • <span className="text-orange-500 font-medium">Due {task.dueDate}</span></p>
            </div>
            <button 
              onClick={() => handleDelete(task.id)}
              className="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-semibold rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-sm"
            >
              ✓ Mark Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;