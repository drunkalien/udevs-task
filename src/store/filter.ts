import { create } from "zustand";

type InitialState = {
  filter: string;
};

type Actions = {
  setFilter: (filter: string) => void;
};

export const useFilterStore = create<InitialState & Actions>((set) => ({
  filter: "",
  setFilter: (filter: string) => set({ filter }),
}));
