import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="********"
              required
            />
          </div>
          <div className="flex gap-6 justify-between font-medium">
            <Link
              href="/profile"
              className="w-1/2"
            >
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Log In
              </button>
            </Link>
            <Link
              href="/register"
              className="w-1/2"
            >
              <button
                type="button"
                className="w-full py-2 px-4 bg-white text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-100 focus:outline-none focus:bg-indigo-100"
              >
                Create Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
