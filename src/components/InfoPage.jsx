import React from 'react';
import { useNavigate } from 'react-router-dom';

function InfoPage() {
    const navigate = useNavigate();

    const handleOpenApp = () => {
        navigate('/counter');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900  dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-8">About This App</h1>
            <p className="text-lg mb-4">
                Hello! I'm Prachiti Gaikwad. This web application developed using React.js and Tailwind CSS showcases a simple counter app with the following features:
            </p>
            <ul className="list-disc list-inside mb-8">
                <li>Add and subtract from a number with undo/redo functionality.</li>
                <li>A dynamic progress bar that changes color based on the number.</li>
                <li>Dark and light mode toggle.</li>
                <li>An input field to directly set the number.</li>
                <li>A confirmation alert before resetting the counter.</li>
            </ul>
            <button
                onClick={handleOpenApp}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Open Counter App
            </button>
        </div>
    );
}

export default InfoPage;
