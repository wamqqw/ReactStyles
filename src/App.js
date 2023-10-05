import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FootballClub from './pages/FootballClub';
import AllClubs from './pages/AllClubs';
import Clubs from './pages/Clubs';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FootballClub/>}/>
        <Route exact path='/allClubs' element={<AllClubs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
