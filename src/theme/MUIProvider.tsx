import { PropsWithChildren } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { darkModeStore } from "@/store";

export const MUIProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = darkModeStore();

  const darkTheme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
