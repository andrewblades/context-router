import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Tasks from './components/Tasks';
import Profile from './components/Profile';
import AppProvider from './context/AppProvider';
import './styles/tailwind.css';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar />
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
};

export default App;
