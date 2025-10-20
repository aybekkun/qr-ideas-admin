import { useNavigate, useRouterState } from "@tanstack/react-router"
import { Menu, theme } from "antd"
import Sider from "antd/es/layout/Sider"
import { useMenu } from "./use-menu.hook"
import { Logo } from "../logo"
import { useThemeStore } from "@/store/use-theme-store"
const siderStyle: React.CSSProperties = {
	overflow: "auto",
	height: "100vh",
	position: "sticky",
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: "thin",
	borderTop: "1px solid #E4E4E7",
	/* 	scrollbarGutter: "stable", */
}
export const AppSider = () => {
	const items = useMenu()

	const { token } = theme.useToken()

	const { theme: mode } = useThemeStore()
	const navigate = useNavigate()
	const router = useRouterState()
	const currentPath = router.location.pathname

	return (
		<Sider
			width={270}
			style={{ ...siderStyle, background: token.colorBgContainer }}
			theme={mode}
		>
			<Logo />
			<Menu
				theme={mode}
				mode="inline"
				onSelect={(item) =>
					navigate({
						to: item.key,
					})
				}
				style={{
					background: token.colorBgContainer,
				}}
				selectedKeys={[currentPath]}
				items={items}
			/>
		</Sider>
	)
}
