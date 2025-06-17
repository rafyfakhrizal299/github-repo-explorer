import React, { ComponentType, useEffect, useState } from 'react';
import SearchUsers from './features/users/SearchUsers';

import {
  IoLogoGithub as _IoLogoGithub,
  IoSunnyOutline as _IoSunnyOutline,
  IoMoonOutline as _IoMoonOutline,
} from 'react-icons/io5';


const App = () => {
  const IoLogoGithub = _IoLogoGithub as ComponentType<{ className?: string }>;
  const IoSunnyOutline = _IoSunnyOutline as ComponentType<{ className?: string }>;
  const IoMoonOutline = _IoMoonOutline as ComponentType<{ className?: string }>;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-darkbg text-gray-900 dark:text-darktext p-4 font-poppins transition-colors">
      <div className="flex justify-between items-center mb-4">
        <div className='flex items-center gap-2'>
        <IoLogoGithub className="w-8 h-8" />
        <h1 className="text-xl font-bold"> GitHub Repo Explorer</h1>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`
            relative w-10 h-10 flex items-center justify-center
            rounded-full transition-colors duration-300
            ${isDark ? 'bg-blue-700 text-white' : 'bg-yellow-400 text-yellow-900'}
            hover:scale-105 transform overflow-hidden
          `}
          aria-label="Toggle Dark Mode"
        >
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ transform: `translateY(${isDark ? '0%' : '-100%'})`, opacity: isDark ? 1 : 0 }}
            key="moon"
          >
            <IoMoonOutline className="w-5 h-5" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ transform: `translateY(${isDark ? '100%' : '0%'})`, opacity: isDark ? 0 : 1 }}
            key="sun"
          >
            <IoSunnyOutline className="w-5 h-5" />
          </div>
        </button>
      </div>

      <SearchUsers />
    </div>
  );
};

export default App;
