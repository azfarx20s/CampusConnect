import { useState, useEffect } from 'react';
import Sidebar from './components/sidebar.jsx';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import Timetable from './pages/Timetable';
import Assignments from './pages/Assignments';
import Exams from './pages/Exams';
import Attendance from './pages/Attendance';
import GPACalculator from './pages/GPACalculator';
import Resources from './pages/Resources'; // Added import

import { 
  initialAssignments, 
  attendanceData, 
  examsData, 
  timetableData 
} from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('campusconnect_theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('campusconnect_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const [assignments, setAssignments] = useState(() => {
    const savedTasks = localStorage.getItem('campusconnect_assignments');
    return savedTasks ? JSON.parse(savedTasks) : initialAssignments;
  });

  useEffect(() => {
    localStorage.setItem('campusconnect_assignments', JSON.stringify(assignments));
  }, [assignments]);

  const renderView = () => {
    switch(currentView) {
      case 'Dashboard': 
        return (
          <Dashboard 
            assignments={assignments}
            attendanceData={attendanceData}
            examsData={examsData}
            timetableData={timetableData}
            setCurrentView={setCurrentView}
          />
        );
      case 'Subjects': return <Subjects />;
      case 'Timetable': return <Timetable />;
      case 'Assignments': 
        return <Assignments assignments={assignments} setAssignments={setAssignments} />;
      case 'Exams': return <Exams />;
      case 'Attendance': return <Attendance />;
      case 'GPA Calculator': return <GPACalculator />;
      case 'Resources': return <Resources />; // Added route
      default: 
        return (
          <div className="flex h-full items-center justify-center text-gray-400">
            <p className="text-xl">{currentView} page is under construction...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="flex-1 p-8 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}

export default App;