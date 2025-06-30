import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MoonIcon, SunIcon, Bars2Icon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, themeColors, setColor, toggleTheme, isOpen } = useContext(ThemeContext);

  return (
    <div className={`w-10 shadow fixed h-full flex items-center flex-col py-16 z-40 right-0 top-0 transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-10'}`}>
      
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

      {Object.keys(themeColors).map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-4 sm:w-4 md:w-5 lg:w-5 h-4 sm:h-4 md:h-5 lg:h-5 mt-2 flex items-center drop-shadow justify-center rounded-full cursor-pointer transition-all ${themeColors[c].bg}`}></button>
        ))}
    </div>
  );
};

export default ThemeToggle;