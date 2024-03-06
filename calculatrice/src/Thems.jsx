// Themes.jsx
import React from 'react';

function Themes({ theme, toggleTheme }) {
    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default Themes;
