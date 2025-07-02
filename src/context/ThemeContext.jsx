import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("green");

  const themeColors = {
    green: {
      text: "text-green-600",
      bg: "bg-green-600",
      outline: "outline-green-600",
      hover: "hover:text-green-600",
    },
    yellow: {
      text: "text-yellow-600",
      bg: "bg-yellow-600",
      outline: "outline-yellow-600",
      hover: "hover:text-yellow-600",
    },
    sky: {
      text: "text-sky-600",
      bg: "bg-sky-600",
      outline: "outline-sky-600",
      hover: "hover:text-sky-600",
    },
    red: {
      text: "text-red-600",
      bg: "bg-red-600",
      outline: "outline-red-600",
      hover: "hover:text-red-600",
    },
    slate: {
      text: "text-slate-600",
      bg: "bg-slate-600",
      outline: "outline-slate-600",
      hover: "hover:text-slate-600",
    },
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, color, setColor, themeColors, isOpen, setIsOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};
