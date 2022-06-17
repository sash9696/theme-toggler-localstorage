import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  //Default theme light
  const [dark, setDark] = useState(false);

  //On mount, read the preffered theme from the persistance

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";

    setDark(isDark);
  }, [dark]);

  //to toggle between light and dark

  const toggle = () => {
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  };

  //filter the styles based on theme selected

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
