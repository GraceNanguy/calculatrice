// App.jsx
import React, { useState } from 'react';
import Calculator from './Calculator';
import Themes from './Thems';
import './App.css'; 

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className={`app ${theme}`}>
            <Themes theme={theme} toggleTheme={toggleTheme} />
            <Calculator />
            
        </div>
    );
}

export default App;
