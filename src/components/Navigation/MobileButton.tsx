import React from 'react';

// Local Dependencies
import { MobileButtonProps } from './types';

export const MobileButton = (props: MobileButtonProps) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
      id="main-menu"
      aria-label="Main menu"
      aria-haspopup="true"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};
