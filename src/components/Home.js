import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Home = () => {
    const { state, login } = useContext(AppContext);

    return (
        <div className={`container mx-auto p-4 ${state.theme === 'light' ? ' text-black' : ' text-white'}`}>
            <div className="flex items-baseline space-x-4 mb-6">
            <h1 className="text-3xl font-light mb-4">Welcome</h1>
            <h2 className={`text-5xl font-extrabold mb-6 ${state.theme === 'light' ? 'text-blue-600' : 'text-blue-300'}`}>{state.userProfile.username && state.isAuthenticated ? state.userProfile.username : ""}</h2>
            </div>
                {state.isAuthenticated ? (
                <div>
                    <h2>Your Current Tasks</h2>
                    <ul>
                    {state.tasks.map((task, index) => (
                    <li key={index} className={`flex justify-between items-center p-4 mb-2 ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'} rounded-md shadow-md`}>
                        <span>{task}</span>
                    </li>
                ))}
            </ul>
                </div>
            ) : (
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  onClick={login}>Please log in for further usage</button>
            )}
        </div>
    );
};

export default Home;
