import create from "zustand";
import { persist } from "zustand/middleware";
import produce from "immer";

type StoredUser = {
  email: string;
  name: string;
  token: string;
};

type AuthStore = {
  isLoggedIn: boolean;
  user?: StoredUser;
  login: (email: string) => void;
  logout: () => void;
  setEmail: (email: string) => void;
  setUserName: (name: string) => void;
  setToken: (token: string) => void;
};

export const useAuth = create<AuthStore>(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: (email: string) =>
        set({
          user: { email, name: "test", token: "12345" },
          isLoggedIn: true,
        }),
      setEmail: (email) =>
        set(
          produce((state: AuthStore) => {
            if (state.user) {
              state.user.email = email;
            }
          })
        ),
      logout: () => set({ isLoggedIn: false, user: undefined }),
      setUserName: (name: string) =>
        set(
          produce((state: AuthStore) => {
            if (state.user) {
              state.user.name = name;
            }
          })
        ),
      setToken: (token: string) =>
        set(
          produce((state: AuthStore) => {
            if (state.user) {
              state.user.token = token;
            }
          })
        ),
    }),
    { name: "auth" }
  )
);
