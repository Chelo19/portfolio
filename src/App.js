import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className="App">
      <DarkMode/>
      <LandingPage/>
    </div>
  );
}

export default App;
