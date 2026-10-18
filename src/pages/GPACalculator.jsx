import React, { useState } from 'react';

// A standard grade conversion object
const gradePoints = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'D': 1.0, 'F': 0.0
};

function GPACalculator() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: '', credits: '3', grade: 'A' });

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.name) return;
    
    setCourses([...courses, { ...newCourse, id: Date.now(), credits: parseFloat(newCourse.credits) }]);
    setNewCourse({ name: '', credits: '3', grade: 'A' });
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const calculateGPA = () => {
    if (courses.length === 0) return 0.00;
    
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      totalCredits += course.credits;
      totalPoints += (gradePoints[course.grade] * course.credits);
    });

    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">GPA Calculator</h1>
        <p className="text-gray-500 mt-1">Estimate your current semester CGPA.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <form onSubmit={handleAddCourse} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Add Course Result</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Subject Name (e.g. OOP)" 
                value={newCourse.name}
                onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Credits</label>
                  <select 
                    value={newCourse.credits}
                    onChange={(e) => setNewCourse({...newCourse, credits: e.target.value})}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Grade</label>
                  <select 
                    value={newCourse.grade}
                    onChange={(e) => setNewCourse({...newCourse, grade: e.target.value})}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    {Object.keys(gradePoints).map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Calculation
              </button>
            </div>
          </form>
        </div>

        {/* Results and List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Big Result Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl shadow-md text-white flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium opacity-90">Estimated CGPA</h2>
              <p className="text-sm opacity-75 mt-1">Based on {courses.length} courses</p>
            </div>
            <div className="text-5xl font-bold">
              {calculateGPA()}
            </div>
          </div>

          {/* Course List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {courses.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                Add a course to see your calculated GPA.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-semibold text-gray-600">Subject</th>
                    <th className="p-4 font-semibold text-gray-600">Credits</th>
                    <th className="p-4 font-semibold text-gray-600">Grade</th>
                    <th className="p-4 font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-b border-gray-50">
                      <td className="p-4 font-medium text-gray-800">{course.name}</td>
                      <td className="p-4 text-gray-600">{course.credits}</td>
                      <td className="p-4 font-bold text-blue-600">{course.grade}</td>
                      <td className="p-4">
                        <button 
                          onClick={() => deleteCourse(course.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GPACalculator;