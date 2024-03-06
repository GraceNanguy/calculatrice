import React, { useState } from 'react';
import Button from './Bouton';
import Historique from './History';

function Calculator() {
    const [display, setDisplay] = useState('');
    const [history, setHistory] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const [showSpecialFunctions, setShowSpecialFunctions] = useState(false);
    const handleOperatorClick = (value) => {
        if (value === '=') {
            try {
                const result = evaluateExpression(display);
                setHistory(`${display} = ${result}\n${history}`);
                setDisplay(result.toString());
            } catch (error) {
                setDisplay('Error');
            }
        }
        else if (value === 'scd') {
            setShowSpecialFunctions(prevState => !prevState);
        } 
        else if (value === 'AC') { 
            setDisplay('');
        } 
        else if (value === 'C') { 
            setDisplay(display.slice(0, -1));
        } 
        else if (value === 'History') {
            setShowHistory(true);
        } 
        else {
            setDisplay(prevDisplay => prevDisplay + value);
        }
        
    };

    const handleHideHistory = () => {
        setShowHistory(false);
    };

    const evaluateExpression = (expression) => {
        const specialFunctions = {
            sin: 'Math.sin',
            cos: 'Math.cos',
            tan: 'Math.tan',
            sqrt: 'Math.sqrt',
            ln: 'Math.log',
            lg: 'Math.log10',
            pi: 'Math.PI',
            'x!': 'factorial'
        };

        const replacedExpression = expression.replace(/(sin|cos|tan|ln|lg|sqrt|pi|x!)/g, match => specialFunctions[match] || match);

        return eval(replacedExpression);
    };

    const factorial = (n) => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);

    const buttons = [
        ['AC', 'C', '/'], 
        ['7', '8', '9', '*'], 
        ['4', '5', '6', '-'], 
        ['1', '2', '3', '+'],
        ['scd', '0', '=', '.', ],
    ];
    
    const primarySpecialFunctions = ['sin', 'cos', 'tan', 'ln', 'lg'];
    const secondarySpecialFunctions = ['sqrt', 'pi', 'x!', '(', ')'];

    return (
        <div>
            <div className="calculator">
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
            </div>
            <div className="history-toggle">
                <Button label="History" onClick={() => setShowHistory(!showHistory)} />
            </div>
            {showHistory && <Historique history={history} onHide={handleHideHistory} />}
        </div>
    );
    
    
    
}

export default Calculator;
