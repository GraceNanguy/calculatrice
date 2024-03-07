import React from 'react';

function Historique({ history, theme }) {
    return (
        <div className={`historique ${theme === 'dark' ? 'dark' : 'light'}`}>
            {history.map((item, index) => (
                <div key={index}>
                    <span className={theme === 'dark' ? 'dark' : 'light'}>{item}</span>
                </div>
            ))}
        </div>
    );
}

export default Historique;
