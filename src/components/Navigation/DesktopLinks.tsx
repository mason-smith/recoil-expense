import React from 'react';
import { Link } from 'react-router-dom';

export const DesktopLinks = () => {
  return (
    <div className="hidden md:block md:ml-10 md:pr-4">
      <Link
        to="/"
        className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
      >
        Todos
      </Link>
      <Link
        to="/expenses"
        className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
      >
        Expenses
      </Link>

      <Link
        to="/login"
        className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
      >
        Log in
      </Link>
    </div>
  );
};
