import type { AliasToken } from "antd/es/theme/internal"

export const THEME_MODE = {
	LIGHT: "light",
	DARK: "dark",
} as const

const BASE_TOKENS: Partial<AliasToken> = {
	colorPrimary: "#62A4F7",
	borderRadius: 3,
	fontFamily: "'Inter', 'Roboto', 'Segoe UI', sans-serif",
	fontSize: 16,
}

// Светлая тема (в стиле shadcn)
export const LIGHT_THEME: Partial<AliasToken> = {
	...BASE_TOKENS,
	colorBgBase: "#ffffff",
	colorTextBase: "#0f172a",
	colorBorder: "#e5e7eb",
}

// Тёмная тема (в стиле shadcn dark)
export const DARK_THEME: Partial<AliasToken> = {
	...BASE_TOKENS,
	colorBgBase: "#000",
	colorTextBase: "#fff",
	colorBorder: "#1e293b",
	colorBgContainer: "#171717",
}
