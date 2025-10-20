import { THEME_MODE } from "@/constants"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

interface ThemeState {
	theme: Theme
	toggleTheme: () => void
	setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set, get) => ({
			theme: THEME_MODE.LIGHT,
			toggleTheme: () => {
				const newTheme =
					get().theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
				set({ theme: newTheme })
			},
			setTheme: (theme) => {
				set({ theme })
			},
		}),
		{
			name: "theme-storage", // ключ в localStorage
		}
	)
)
