import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('developer');

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', mode === 'cybersecurity' ? '#34D399' : '#24F0F3');
    }
  }, [mode]);

  const value = useMemo(() => ({
    mode,
    setMode,
    isCybersecurity: mode === 'cybersecurity',
  }), [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// The hook is intentionally colocated with the provider to keep theme access in one module.
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return theme;
};
