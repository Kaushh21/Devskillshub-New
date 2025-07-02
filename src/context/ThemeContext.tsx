import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const defaultTheme: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
};

// Light and dark theme values
export const lightTheme = {
  body: '#ffffff',
  text: '#1a202c',
  secondaryText: '#4a5568',
  background: '#ffffff',
  cardBg: '#ffffff',
  primary: '#3182ce',
  secondary: '#718096',
  accent: '#f56565',
  border: '#e2e8f0',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  hoverBg: '#f7fafc',
};

export const darkTheme = {
  body: '#1a202c',
  text: '#ffffff',
  secondaryText: '#a0aec0',
  background: '#1a202c',
  cardBg: '#2d3748',
  primary: '#63b3ed',
  secondary: '#a0aec0',
  accent: '#fc8181',
  border: '#4a5568',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  hoverBg: '#2d3748',
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeMode) || 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 