import React from 'react';
import Sun from '../icons/Sun';
import Moon from '../icons/Moon';
export default function DarkModeButton({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="h-12 w-12 border rounded-full flex items-center justify-center fixed bottom-8 right-8 z-20"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}
