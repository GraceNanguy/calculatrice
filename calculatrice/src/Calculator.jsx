import React, { useState } from 'react';
import Bouton from './Bouton';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const updateDisplayValue = (newValue) => {
    setDisplayValue(newValue);
  };

  const addDigit = (digit) => {
    if (displayValue === '0') {
      updateDisplayValue(digit);
    } else {
      updateDisplayValue(displayValue + digit);
    }
  };

  const clearDisplay = () => {
    updateDisplayValue('0');
  };

  const addOperator = (operator) => {
    updateDisplayValue(displayValue + operator);
  };

  const removeLastDigit = () => {
    if (displayValue.length === 1) {
      updateDisplayValue('0');
    } else {
      updateDisplayValue(displayValue.slice(0, -1));
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      updateDisplayValue(result.toString());
    } catch (error) {
      updateDisplayValue('Error');
    }
  };

  return (
    <div>
      <div className="calculator-screen">{displayValue}</div>

      <div className="calculator-buttons">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
          <Bouton key={digit} label={digit} onClick={() => addDigit(digit.toString())} />
        ))}
      </div>

      <div className="calculator-buttons">
        {['+', '-', '*', '/'].map((operator) => (
          <Bouton key={operator} label={operator} onClick={() => addOperator(operator)} />
        ))}
        <Bouton label="=" onClick={calculateResult} />
      </div>

      <Bouton label="DEL" onClick={removeLastDigit} />
      <Bouton label="AC" onClick={clearDisplay} />
    </div>
  );
}

export default Calculator;
