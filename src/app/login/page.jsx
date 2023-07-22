"use client"

import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // You can use the email and password state values to perform the login action
    // For example, you can make an API call to authenticate the user
  };

  const handleJoin = () => {
    // Add your logic to handle the "Join" button click
    // For example, you can redirect the user to a registration page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-white">
      <div className="w-96 text-black p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            onClick={handleJoin}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
