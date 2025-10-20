import { THEME_MODE } from "@/constants"
import { useThemeStore } from "@/store/use-theme-store"
import { MoonFilled, SunOutlined } from "@ant-design/icons"
import { Button } from "antd"

const ThemeModeButton = () => {
	const { theme, toggleTheme } = useThemeStore()
	const isDark = theme === THEME_MODE.DARK
	return (
		<>
			<Button
				type={"text"}
				icon={isDark ? <MoonFilled /> : <SunOutlined />}
				onClick={toggleTheme}
			/>
		</>
	)
}

export { ThemeModeButton }
