CampusConnect 🎓

CampusConnect is a centralized, responsive student academic dashboard designed to streamline university coursework, assignment tracking, class schedules, attendance analytics, and GPA estimations into a single, clean user interface.

🌐 Live Demo: https://campus-connect-urbf.vercel.app/

📂 GitHub Repository: https://github.com/azfarx20s/CampusConnect

✨ Features

📊 Executive Dashboard: Real-time summary metrics for overall attendance percentage, pending coursework, and daily class timetables.

📝 Assignment Manager: Interactive task creation, deletion, and completion tracking persisted with browser LocalStorage.

📈 GPA Calculator: Real-time credit-point logic allowing students to estimate semester CGPA dynamically.

📅 Exams & Timetable: Visual calendars for midterm/final schedules and organized daily lecture schedules.

🎯 Attendance Analytics: Progress bar visualizer tracking mandatory attendance percentages per subject.

📚 Academic Resources: Curated portal for course syllabi, past exam papers, and university portal links.

🌙 System-Aware Dark Mode: Smooth class-based Light/Dark theme switching powered by Tailwind CSS v4 with persisted user preference.

🛠️ Tech Stack & Architecture

Frontend Framework: React.js (ES6+)

Build Tool: Vite

Styling Engine: Tailwind CSS v4

State Management: React Hooks (useState, useEffect)

Data Persistence: Web LocalStorage API

Deployment & Hosting: Vercel

📂 Project Structure

CampusConnect/
├── public/
├── src/
│   ├── components/
│   │   └── sidebar.jsx          # Main Navigation Sidebar & Theme Toggle
│   ├── data/
│   │   └── mockData.js          # Centralized Mock Datasets & Exports
│   ├── pages/
│   │   ├── Dashboard.jsx        # Summary Overview Page
│   │   ├── Subjects.jsx         # Enrolled Course List
│   │   ├── Timetable.jsx        # Weekly Class Schedule Table
│   │   ├── Assignments.jsx      # Interactive Task Manager
│   │   ├── Attendance.jsx       # Attendance Progress Bars
│   │   ├── Exams.jsx            # Upcoming Exam Schedule
│   │   ├── GPACalculator.jsx    # Dynamic CGPA Estimator
│   │   └── Resources.jsx        # Study Material Library
│   ├── App.jsx                  # Main Application Component & Routing Logic
│   ├── index.css                # Global Styles & Tailwind CSS v4 Imports
│   └── main.jsx                 # React DOM Entry Point
├── package.json
└── vite.config.js


🚀 Local Setup & Installation

To run CampusConnect locally on your machine:

Clone the repository:

git clone https://github.com/azfarx20s/CampusConnect.git
cd CampusConnect


Install dependencies:

npm install


Start the development server:

npm run dev


Open in Browser:
Navigate to http://localhost:5173 in your web browser.

👨‍💻 Author

Azfar Qadri

GitHub: @azfarx20s
Live Project: CampusConnect App