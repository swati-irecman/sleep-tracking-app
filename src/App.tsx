// import React from 'react';
// import './App.css';
// import SleepDashboard from './components/SleepDashboard';

// const App: React.FC = () => {
//   return (
//     <>
//       <header className="header">Sleep Analysis Dashboard</header>
//       <main className="main">
//         <SleepDashboard />
//       </main>
//     </>
//   );
// };

// export default App;


// App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SleepDashboard from './components/SleepDashboard';
import SleepInputForm from './components/SleepInputForm'; 

const App: React.FC = () => {
  return (
    <Router>
      <header className="header">Sleep Analysis Dashboard</header>
      <main className="main">
        <Routes>
          <Route path="/" element={<SleepDashboard />} />
          <Route path="/add-data" element={<SleepInputForm />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

