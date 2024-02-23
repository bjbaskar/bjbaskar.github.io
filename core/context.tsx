import React from "react";

import useDarkMode from "./useDarkMode";
import useStorageService from "./useStorage";

export type ThemeContextProps = {
  theme: any;
  toggleTheme: () => void;
  isDarkTheme?: any;
};

export type ThemeContextIndexProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeProvider: React.FC<ThemeContextIndexProps> = ({
  children,
}: ThemeContextIndexProps) => {
  const theme = useDarkMode();
  const svc = useStorageService();

  const onSetTheme = React.useMemo(
    () => ({
      toggleTheme: () => {
        svc.saveTheme(theme.colorTheme === "dark" ? "light" : "dark");
        theme.setTheme((theme) => (theme === "light" ? "dark" : "light"));
      },
      theme,
      resetTheme: () => {
        theme.setTheme("light");
      },
    }),
    [theme, svc]
  );

  return (
    <ThemeContext.Provider value={onSetTheme}>{children}</ThemeContext.Provider>
  );
};
