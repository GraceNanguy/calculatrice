import React, { useState } from 'react';
import Button from './Bouton';
import Historique from './History';

function Calculator({ theme }) {
    const [display, setDisplay] = useState('');
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [showSpecialFunctions, setShowSpecialFunctions] = useState(false);

    // Gestionnaire de clic pour les opérateurs
    const handleOperatorClick = (value) => {
        switch (value) {
            case '=':
                try {
                    const result = evaluateExpression(display);
                    const newHistory = `${display} = ${result}`;
                    setHistory([newHistory, ...history]);
                    setDisplay(result.toString());
                } catch (error) {
                    setDisplay('Error');
                }
                break;
            case 'scd':
                setShowSpecialFunctions(!showSpecialFunctions);
                break;
            case 'AC':
                setDisplay('');
                break;
            case 'C':
                setDisplay(display.slice(0, -1));
                break;
            case 'History':
                setShowHistory(!showHistory);
                break;
            default:
                setDisplay(display + value);
                break;
        }
    };

    // Gestionnaire de clic pour masquer l'historique
    const handleHideHistory = () => {
        setShowHistory(false);
    };

    // Fonction pour évaluer une expression mathématique
    const evaluateExpression = (expression) => {
        try {
            // Remplace les occurrences des fonctions spéciales
            expression = expression.replace(/sin/g, 'Math.sin');
            expression = expression.replace(/cos/g, 'Math.cos');
            expression = expression.replace(/tan/g, 'Math.tan');
            expression = expression.replace(/ln/g, 'Math.log');
            expression = expression.replace(/lg/g, 'Math.log10');
    
            // Évalue l'expression
            const result = eval(expression);
            return result;
        } catch (error) {
            throw new Error('Invalid expression');
        }
    };
    

    // Les boutons de la calculatrice
    const buttons = [
        ['AC', 'C', '/'], 
        ['7', '8', '9', '*'], 
        ['4', '5', '6', '-'], 
        ['1', '2', '3', '+'],
        ['scd', '0', '=', '.', ],
    ];
    
    // Fonctions spéciales primaires et secondaires
    const primarySpecialFunctions = ['sin', 'cos', 'tan', 'ln', 'lg'];
    const secondarySpecialFunctions = ['sqrt', 'pi', 'x!', '(', ')'];

    return (
        <div className={`calculator ${theme === 'dark' ? 'dark' : 'light'}`}>
                <div className="display">{display}</div>
                {showSpecialFunctions && (
                    <div className="button-row">
                        {primarySpecialFunctions.map((functionName) => (
                            <Button key={functionName} label={functionName} onClick={() => handleOperatorClick(functionName)} />
                        ))}
                    </div>
                )}
                
                <div className="buttons">
                    {buttons.map((row, rowIndex) => (
                        <div key={rowIndex} className="button-row">
                            {row.map((button) => (
                                <Button key={button} label={button} onClick={() => handleOperatorClick(button)} />
                            ))}
                        </div>
                    ))}
                    {showSpecialFunctions && (
                        <div className="button-row">
                            {secondarySpecialFunctions.map((functionName) => (
                                <Button key={functionName} label={functionName} onClick={() => handleOperatorClick(functionName)} />
                            ))}
                        </div>
                    )}
                </div>
            
            <div className="history-toggle">
                <Button label="History" onClick={() => setShowHistory(!showHistory)} />
            </div>
            {showHistory && <Historique history={history} onHide={handleHideHistory} />}
        </div>
    );
}

export default Calculator;
