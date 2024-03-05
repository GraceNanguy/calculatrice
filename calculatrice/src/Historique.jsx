// History.jsx
import React from 'react';

function History({ history }) {
  return (
    <div className="history">
      <h2>Historique des Calculs</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
