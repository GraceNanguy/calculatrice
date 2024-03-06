// Bouton.jsx
import React from 'react';

function Button({ label, onClick }) {
    return (
        <button className="bouton" onClick={() => onClick(label)}>
            {label}
        </button>
    );
}

export default Button;
