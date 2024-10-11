import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DailyChampionQuestionPage from './pages/DailyChampionTest/DailyChampionQuestionPage';
import DailyChampionResultPage from './pages/DailyChampionTest/DailyChampionResultPage';
import TestChoose from './components/TestChoose';
import './styles/base.css';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testchoose" element={<TestChoose />} />
        <Route path="/dailychampiontest" element={<DailyChampionQuestionPage />} />
        <Route path="/dailychampionresult" element={<DailyChampionResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
