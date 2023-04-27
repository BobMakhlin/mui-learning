import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useContext } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";

const LIGHT = "light";
const DARK = "dark";

const THEMES = {
  [LIGHT]: createTheme({
    palette: {
      mode: LIGHT
    },
  }),
  [DARK]: createTheme({
    palette: {
      mode: DARK,
      primary: deepOrange
    }
  })
};

const ColorModeContext = createContext({
  toggleColorMode: () => {
    // By default is a dummy empty function.
  },
});

const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(LIGHT);
  const theme = THEMES[mode];

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT));
  }, []);
  const contextValue = {
    toggleColorMode,
  };

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
export default ColorModeContextProvider;
