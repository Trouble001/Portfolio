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
    rose: {
      text: "text-rose-600",
      bg: "bg-rose-600",
      outline: "outline-rose-600",
      hover: "hover:text-rose-600",
    },
    orange: {
      text: "text-orange-600",
      bg: "bg-orange-600",
      outline: "outline-orange-600",
      hover: "hover:text-orange-600",
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
