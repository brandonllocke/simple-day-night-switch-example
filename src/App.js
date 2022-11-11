import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const themeOptions = ['light', 'dark']
    const [themeMode, setThemeMode] = useState(themeOptions[1]);

    const toggleTheme = () => {
        if (themeMode === themeOptions[0]) {
            setThemeMode(themeOptions[1]);
        } else {
            setThemeMode(themeOptions[0])
        }
    }


  return (
    <div className="App">
      <header className={`App-header-${themeMode}`}>
        <button onClick={() => toggleTheme() }>
            <img src={logo} className={`App-logo-${themeMode}`} alt="logo" />
        </button>
        <p>
          Click the logo to switch day/night mode.
        </p>
      </header>
    </div>
  );
}

export default App;
