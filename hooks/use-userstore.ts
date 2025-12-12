import zustandStorage from "@/utils/zustandStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
    isGuest: boolean,
    user: any,
    setIsGuest: (isGuest: boolean) => void,
    setUser: (user: any) => void,
}

const useUserStore = create(
    persist<UserStore>((set) => ({
    isGuest: false,
    user: null,
    setIsGuest: (isGuest: boolean) => set({ isGuest }),
    setUser: (user: any) => set({ user }),
}), {
    name: 'user-store',
    storage: createJSONStorage(() => zustandStorage)
})
)

export default useUserStore
