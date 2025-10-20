import { DARK_THEME, LIGHT_THEME } from "@/constants"
import { useThemeStore } from "@/store/use-theme-store"
import { App, ConfigProvider, theme } from "antd"
import type { PropsWithChildren } from "react"
import dayjs from "dayjs"
import dayjsEN from "dayjs/locale/en"
// import dayjsUZ from "dayjs/locale/uz-latn"
import localeRU from "antd/locale/ru_RU"
import dayjsRU from "dayjs/locale/ru"
import dayLocaleData from "dayjs/plugin/localeData"
dayjs.locale("ru", {
	...dayjsRU,
	ordinal: dayjsEN.ordinal,
})

dayjs.locale("en", {
	...dayjsEN,
	ordinal: dayjsEN.ordinal,
})

dayjs.extend(dayLocaleData)

dayjs.locale("ru")

export const AntdProvider = ({ children }: PropsWithChildren) => {
	const { theme: mode } = useThemeStore()
	const isDark = mode === "dark"
	const currentAlgorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
	const themeTokens = isDark ? DARK_THEME : LIGHT_THEME

	return (
		<ConfigProvider
			locale={localeRU}
			theme={{
				algorithm: currentAlgorithm,
				token: {
					...themeTokens,
				},
				components: {
					Button: {
						controlHeight: 40,
						fontWeight: 500,
						boxShadow: "none",
					},
					Card: {
						boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.05)",
					},
					Input: {
						controlHeight: 40,
					},
					InputNumber: {
						controlHeight: 40,
					},
					Menu: {
						itemHeight: 45,
						iconSize: 16,
						collapsedIconSize: 16,
					},
				},
			}}
		>
			<App>{children}</App>
		</ConfigProvider>
	)
}
