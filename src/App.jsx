import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/counter" element={<CounterApp />} />
      </Routes>
    </Router>
  );
}

export default App;
