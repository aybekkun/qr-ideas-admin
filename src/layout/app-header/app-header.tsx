import { useAuthStore } from "@/store"
import { formatPhone } from "@/utils"
import {
	PhoneOutlined
} from "@ant-design/icons"
import { Avatar, Button, Flex, Popover, Space, theme, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
import { ThemeModeButton } from "./theme-mode-button"
const { Text } = Typography
export const AppHeader = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()
	const { user, logout } = useAuthStore()

	return (
		<Header
			style={{
				padding: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-end",
				background: colorBgContainer,
				border: "1px solid #E4E4E7",
				/* 				boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.1)", */
			}}
		>
			<ThemeModeButton />
			<Popover
				trigger={"click"}
				arrow={false}
				styles={{
					body: {
						width: 200,
					},
				}}
				placement={"bottomRight"}
				content={
					<Flex vertical gap={12}>
						<Space size="small" align="center">
							<PhoneOutlined style={{ color: "#888" }} />
							<Text type="secondary">{formatPhone(user?.phone)}</Text>
						</Space>
						<Button onClick={logout} danger block>
							Выйти
						</Button>
					</Flex>
				}
			>
				<Avatar style={{ backgroundColor: "#87d068" }}></Avatar>
			</Popover>
		</Header>
	)
}
