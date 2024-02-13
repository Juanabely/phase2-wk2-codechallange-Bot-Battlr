// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotList from './components/BotList';
import ChosenArmy from './components/ChosenArmy';

function App() {
  return (
    <Router>
      <div>
        <h1>My Bot Army</h1>
        <Routes>
          <Route path="/" element={<BotList />} />
          <Route path="/page/:pageNumber" element={<BotList />} />
          <Route path="/chosen-army" element={<ChosenArmy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
