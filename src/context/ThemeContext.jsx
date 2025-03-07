import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}