// App.jsx
import React, { useState } from 'react';
import Calculator from './Calculator';
import History from './Historique'; // Modifier l'import pour le composant History
import ThemeSelector from './Thems';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const addHistory = (calculation) => {
    setHistory([...history, calculation]);
  };

  return (
    <div className="App">
      <h1>Ma calculatrice</h1>
      <Calculator addHistory={addHistory} />
      <button onClick={() => setShowHistory(!showHistory)}>Historique des calculs</button>
      {showHistory && <History history={history} />} {/* Afficher l'historique uniquement si showHistory est true */}
      <ThemeSelector />
    </div>
  );
}

export default App;
