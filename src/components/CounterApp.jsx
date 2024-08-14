import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CounterApp() {
    const [num, setNum] = useState(0);
    const [history, setHistory] = useState([0]);
    const [currentStep, setCurrentStep] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const handleAdd = () => {
        if (num < 150) {
            const newNum = num + 1;
            updateHistory(newNum);
        }
    };

    const handleSubtract = () => {
        if (num > 0) {
            const newNum = num - 1;
            updateHistory(newNum);
        }
    };

    const handleInputChange = (e) => {
        const newNum = Math.min(150, Math.max(0, Number(e.target.value)));
        updateHistory(newNum);
    };

    const updateHistory = (newNum) => {
        const newHistory = history.slice(0, currentStep + 1);
        setHistory([...newHistory, newNum]);
        setCurrentStep(currentStep + 1);
        setNum(newNum);
    };

    const handleUndo = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setNum(history[currentStep - 1]);
        }
    };

    const handleRedo = () => {
        if (currentStep < history.length - 1) {
            setCurrentStep(currentStep + 1);
            setNum(history[currentStep + 1]);
        }
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset the counter?")) {
            setNum(0);
            setHistory([0]);
            setCurrentStep(0);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const getProgressBarColor = () => {
        if (num < 50) return 'green';
        if (num < 100) return 'yellow';
        return 'red';
    };

    return (
        <div className={`flex flex-col items-center justify-center space-y-13 h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <h1 className="text-3xl font-bold mb-8">Let's count till 150!</h1>
            <div className="flex items-center space-x-4 mb-4">
                <button
                    onClick={handleSubtract}
                    disabled={num <= 0}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded disabled:bg-gray-300 text-lg"
                >
                    -
                </button>
                <input
                    type="number"
                    value={num}
                    onChange={handleInputChange}
                    className="w-20 text-center text-xl border rounded text-black"
                />
                <button
                    onClick={handleAdd}
                    disabled={num >= 150}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 text-lg"
                >
                    +
                </button>
            </div>
            <div className="w-40 h-40 mb-4">
                {/* Circular Progress Bar */}
                <CircularProgressbar
                    value={num}
                    maxValue={150}
                    text={`${num}`}
                    styles={buildStyles({
                        pathColor: getProgressBarColor(),
                        textColor: darkMode ? '#fff' : '#333',
                        trailColor: darkMode ? '#555' : '#d6d6d6',
                    })}
                />
            </div>
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={handleUndo}
                    disabled={currentStep === 0}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300"
                >
                    Undo
                </button>
                <button
                    onClick={handleRedo}
                    disabled={currentStep === history.length - 1}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300"
                >
                    Redo
                </button>
                <button
                    onClick={handleReset}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Reset
                </button>
            </div>
            <button
                onClick={toggleDarkMode}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
}

export default CounterApp;
