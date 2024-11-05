import { atom } from "recoil";

export const joinModalOpen = atom<boolean>({
  key: "isOpen",
  default: false,
});
export const isLaunched = atom<boolean>({
  key: "isLaunched",
  default: false,
});
