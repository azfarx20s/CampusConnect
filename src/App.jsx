import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import Timetable from './pages/Timetable';
import Assignments from './pages/Assignments';
import Exams from './pages/Exams';
import Attendance from './pages/Attendance';
import GPACalculator from './pages/GPACalculator';

// Mock Data Imports
import { 
  initialAssignments, 
  attendanceData, 
  examsData, 
  timetableData 
} from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');

  // Initialize state from LocalStorage, falling back to initialAssignments
  const [assignments, setAssignments] = useState(() => {
    const savedTasks = localStorage.getItem('campusconnect_assignments');
    return savedTasks ? JSON.parse(savedTasks) : initialAssignments;
  });

  // Automatically sync to LocalStorage whenever assignments change
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
      default: 
        return (
          <div className="flex h-full items-center justify-center text-gray-400">
            <p className="text-xl">{currentView} page is under construction...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 p-8 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}

export default App;