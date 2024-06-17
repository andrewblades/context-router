import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const Tasks = () => {
    const { state, addTask, removeTask } = useContext(AppContext);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div className={`container mx-auto p-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <div className="mb-4 flex">
                <input
                    type="text"
                    className={`input-field flex-grow px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 rounded-md ${state.theme === 'light' ? 'text-black placeholder-gray-500 bg-white' : 'text-white placeholder-gray-400 bg-gray-700'}`}
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
            <ul>
                {state.tasks.map((task, index) => (
                    <li key={index} className={`flex justify-between items-center p-4 mb-2 ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'} rounded-md shadow-md`}>
                        <span>{task}</span>
                        <button 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => removeTask(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;