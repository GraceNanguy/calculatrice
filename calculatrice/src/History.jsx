import React from 'react';

function Historique({ history }) {
    return (
        <div className="history">
            
            <pre>{history}</pre>
        </div>
    );
}

export default Historique;
