import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';

const About = () => {
    const { state, login } = useContext(AppContext);
    return (
        <div className={`container mx-auto p-4 ${state.theme === 'light' ? 'bg-white text-black' : ' text-white'}`}>
            <h1 className="text-2xl font-bold mb-4">About</h1>
            <p>Sample app with context.api, React-Router, and TaiwindCSS</p>
        </div>
    );
};

export default About;