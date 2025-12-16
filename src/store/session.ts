import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LOCAL_STORAGE_KEYS } from "@/constants";

type SessionStoreState = { session: boolean };

type SessionStoreActions = {
  setSession: (session: SessionStoreState["session"]) => void;
};

type SessionStore = SessionStoreState & SessionStoreActions;

export const useSessionStore = create<SessionStore>()(
  persist(
    set => ({
      session: false,
      setSession: session => set({ session }),
    }),
    { name: LOCAL_STORAGE_KEYS.SESSION },
  ),
);
