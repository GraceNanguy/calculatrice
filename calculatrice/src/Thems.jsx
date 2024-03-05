// ThemeSelector.jsx
import React, { useState } from 'react';

function ThemeSelector() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-selector">
      <button onClick={toggleTheme}>Switch Theme</button>
      {/* Ajoutez ici la logique pour basculer entre les thèmes */}
    </div>
  );
}

export default ThemeSelector;
