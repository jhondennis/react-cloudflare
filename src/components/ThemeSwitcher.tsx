import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { darkModeStore } from "@/store";

export const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = darkModeStore();

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Tooltip title={`${darkMode ? "Light" : "Dark"} mode`} enterDelay={1000}>
      <IconButton size="small" onClick={toggleMode} sx={{ color: "inherit" }}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
