import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="w-5 sm:w-5 md:w-6 lg:w-6 h-5 sm:h-5 md:h-6 lg:h-6 flex items-center justify-center rounded-full cursor-pointer transition-all"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-full h-full text-white/90 drop-shadow" />
      ) : (
        <MoonIcon className="w-full h-full text-black/90 drop-shadow" />
      )}
    </button>
  );
};

export default ThemeToggle;