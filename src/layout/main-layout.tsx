import { useGetProfile } from "@/services/auth"
import { useAuthStore } from "@/store"
import { useNavigate } from "@tanstack/react-router"
import { Layout /* theme */ } from "antd"
import { useEffect, type PropsWithChildren } from "react"
import { AppHeader } from "./app-header/app-header"
import { AppSider } from "./app-sider/app-sider"

const { Content } = Layout

export const MainLayout = ({ children }: PropsWithChildren) => {
	/* const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken() */
	const { isAuth, logout } = useAuthStore()
	const navigate = useNavigate()
	const { isError } = useGetProfile()

	useEffect(() => {
		if (isError || !isAuth) {
			logout()
			navigate({
				to: "/auth",
			})
		}
	}, [isError, isAuth])

	return (
		<Layout>
			<AppSider />
			<Layout style={{ minHeight: "100vh" }}>
				<AppHeader />
				<Content style={{ margin: "10px" }}>
					{/* 		<div
						style={{
							padding: 24,
							minHeight: "100%",

							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					> */}
					{children}
					{/* 		</div> */}
				</Content>
			</Layout>
		</Layout>
	)
}
