import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import Timetable from './pages/Timetable'; // Added import

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');

  const renderView = () => {
    switch(currentView) {
      case 'Dashboard': 
        return <Dashboard />;
      case 'Subjects': 
        return <Subjects />;
      case 'Timetable': // Added route
        return <Timetable />;
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