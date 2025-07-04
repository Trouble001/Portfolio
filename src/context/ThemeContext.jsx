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
      border: "border-green-600",
      hover: "hover:text-green-600",
    },
    yellow: {
      text: "text-yellow-600",
      bg: "bg-yellow-600",
      outline: "outline-yellow-600",
      border: "border-yellow-600",
      hover: "hover:text-yellow-600",
    },
    sky: {
      text: "text-sky-600",
      bg: "bg-sky-600",
      outline: "outline-sky-600",
      border: "border-sky-600",
      hover: "hover:text-sky-600",
    },
    red: {
      text: "text-red-600",
      bg: "bg-red-600",
      outline: "outline-red-600",
      border: "border-red-600",
      hover: "hover:text-red-600",
    },
    slate: {
      text: "text-slate-600",
      bg: "bg-slate-600",
      outline: "outline-slate-600",
      border: "border-slate-600",
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

    const metaTag = document.querySelector('meta[name="theme-color"]');
    const color = theme === 'dark' ? "#1f2937" : "#ffffff";
    if (metaTag) {
      metaTag.setAttribute("content", color);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "theme-color");
      newMeta.setAttribute("content", color);
      document.head.appendChild(newMeta);
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
