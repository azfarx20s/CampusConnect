import React, { useState } from 'react';
import { initialAssignments } from '../data/mockData';

function Assignments() {
  // State to hold our list of assignments
  const [assignments, setAssignments] = useState(initialAssignments);
  
  // State to handle the new assignment form inputs
  const [newTask, setNewTask] = useState({ subject: '', title: '', dueDate: '' });

  // Function to add a new assignment
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    if (!newTask.subject || !newTask.title || !newTask.dueDate) return;

    const newAssignment = {
      id: Date.now(), // Creates a unique ID
      ...newTask,
      status: 'Pending'
    };

    setAssignments([...assignments, newAssignment]);
    setNewTask({ subject: '', title: '', dueDate: '' }); // Clear the form
  };

  // Function to delete an assignment
  const handleDelete = (id) => {
    setAssignments(assignments.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Assignments</h1>
        <p className="text-gray-500 mt-1">Manage your pending coursework.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <form onSubmit={handleAddTask} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Add New Assignment</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Subject (e.g. Web Engineering)" 
                value={newTask.subject}
                onChange={(e) => setNewTask({...newTask, subject: e.target.value})}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input 
                type="text" 
                placeholder="Assignment Title" 
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input 
                type="date" 
                value={newTask.dueDate}
                onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-600"
              />
              <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Assignment
              </button>
            </div>
          </form>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2 space-y-4">
          {assignments.length === 0 ? (
            <div className="bg-white p-8 text-center rounded-xl border border-gray-100 text-gray-500">
              No pending assignments. You're all caught up!
            </div>
          ) : (
            assignments.map((task) => (
              <div key={task.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{task.title}</h4>
                  <p className="text-sm text-gray-500">{task.subject} • Due: {task.dueDate}</p>
                </div>
                <button 
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors text-sm font-medium"
                >
                  Mark Complete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Assignments;