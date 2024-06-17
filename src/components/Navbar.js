import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Navbar = () => {
    const { state, logout, toggleTheme } = useContext(AppContext);

    return (
        <nav className={`flex items-center justify-between p-4 ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
            <Link className="text-xl font-bold" to="/">MyApp</Link>
            <div className="flex items-center">
                <ul className="flex space-x-4 mr-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                </ul>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" 
                    onClick={toggleTheme}>
                    Toggle Theme
                </button>
                {state.isAuthenticated ? (
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={logout}>
                        Logout
                    </button>
                ) : (
                  <></>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

