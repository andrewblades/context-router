import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        isAuthenticated: false,
        theme: 'light',
        tasks: [],
        userProfile: {
            username: '',
            email: '',
            age: ''
        },
    });

    useEffect(() => {
        document.body.className = state.theme;
    }, [state.theme]);

    const login = () => setState({ ...state, isAuthenticated: true });
    const logout = () => setState({ ...state, isAuthenticated: false });
    const toggleTheme = () => setState({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' });
    const addTask = (task) => setState({ ...state, tasks: [...state.tasks, task] });
    const removeTask = (index) => setState({ ...state, tasks: state.tasks.filter((_, i) => i !== index) });
    const updateProfile = (profile) => setState({ ...state, userProfile: { ...state.userProfile, ...profile } });

    return (
        <AppContext.Provider value={{ state, login, logout, toggleTheme, addTask, removeTask, updateProfile }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
