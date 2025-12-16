import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LOCAL_STORAGE_KEYS } from "@/constants";

type DarkModeStoreState = { darkMode: boolean };

type DarkModeStoreActions = {
  setDarkMode: (darkMode: DarkModeStoreState["darkMode"]) => void;
};

type DarkModeStore = DarkModeStoreState & DarkModeStoreActions;

export const darkModeStore = create<DarkModeStore>()(
  persist(
    set => ({
      darkMode: false,
      setDarkMode: darkMode => set({ darkMode }),
    }),
    { name: LOCAL_STORAGE_KEYS.DARK_MODE },
  ),
);
