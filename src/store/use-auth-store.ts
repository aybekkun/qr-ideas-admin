import type { IUser } from "@/services/auth"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type AuthStoreState = {
	user: IUser | null
	setUser: (user: IUser) => void
	logout: () => void
	isAuth: boolean
}

export const useAuthStore = create(
	persist<AuthStoreState>(
		(set) => ({
			isAuth: false,
			user: null,
			setUser: (user) => {
				set({ user: user, isAuth: true })
				localStorage.setItem("token", user.token)
			},
			logout: () => {
				set({ user: null, isAuth: false })
				localStorage.removeItem("token")
			},
		}),
		{ name: "auth" }
	)
)
