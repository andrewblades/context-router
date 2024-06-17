import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const Profile = () => {
    const { state, updateProfile } = useContext(AppContext);
    const [email, setEmail] = useState(state.userProfile.email);
    const [age, setAge] = useState(state.userProfile.age);
    const [username, setUsername] = useState(state.userProfile.username)

    const handleUpdateProfile = () => {
        updateProfile({  username, email, age,});
    };

    return (
        <div className={`flex items-center justify-between p-4 ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="mb-4">
                <label className="block mb-1">Username</label>
                <input
                    type="string"
                    className={`input-field mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 rounded-md ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    className={`input-field mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 rounded-md ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Age</label>
                <input
                    type="number"
                    className={`input-field mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 rounded-md ${state.theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleUpdateProfile}>
                Update Profile
            </button>
        </div>
    );
};

export default Profile;
