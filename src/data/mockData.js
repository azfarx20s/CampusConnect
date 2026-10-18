export const subjectsData = [
  { id: 1, title: 'Mobile Application Development', code: 'CS-401', instructor: 'Dr. Sarah Khan', credits: 3, room: 'Lab 2' },
  { id: 2, title: 'Software Engineering', code: 'CS-402', instructor: 'Prof. Ahmed Qureshi', credits: 3, room: 'Room 105' },
  { id: 3, title: 'Web Engineering', code: 'CS-403', instructor: 'Engr. Ali Raza', credits: 3, room: 'Lab 1' },
  { id: 4, title: 'Database Systems', code: 'CS-404', instructor: 'Dr. Usman Malik', credits: 4, room: 'Lab 3' },
  { id: 5, title: 'Computer Networks', code: 'CS-405', instructor: 'Prof. Bilal Hassan', credits: 3, room: 'Room 201' }
];

export const initialAssignments = [
  { id: 1, title: 'Build Flutter Layout', subject: 'Mobile Application Development', dueDate: 'Oct 20', status: 'Pending' },
  { id: 2, title: 'Database ERD Diagram', subject: 'Database Systems', dueDate: 'Oct 22', status: 'Pending' }
];

export const attendanceData = [
  { id: 1, subject: 'Mobile Application Development', attended: 24, total: 28 },
  { id: 2, subject: 'Software Engineering', attended: 26, total: 30 },
  { id: 3, subject: 'Web Engineering', attended: 22, total: 25 },
  { id: 4, subject: 'Database Systems', attended: 28, total: 32 },
  { id: 5, subject: 'Computer Networks', attended: 20, total: 28 }
];

export const examsData = [
  { id: 1, subject: 'Mobile Application Development', date: 'Oct 25, 2026', time: '10:00 AM', room: 'Lab 2' },
  { id: 2, subject: 'Software Engineering', date: 'Oct 28, 2026', time: '02:00 PM', room: 'Room 105' }
];

export const timetableData = [
  { id: 1, day: 'Monday', subject: 'Mobile Application Development', time: '09:00 AM - 11:00 AM', room: 'Lab 2' },
  { id: 2, day: 'Tuesday', subject: 'Software Engineering', time: '11:00 AM - 01:00 PM', room: 'Room 105' },
  { id: 3, day: 'Wednesday', subject: 'Web Engineering', time: '01:30 PM - 03:30 PM', room: 'Lab 1' },
  { id: 4, day: 'Thursday', subject: 'Database Systems', time: '10:00 AM - 12:00 PM', room: 'Lab 3' }
];