import {
	FundProjectionScreenOutlined,
	HomeOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons"

export const menuItems = [
	{
		key: "/",
		icon: <HomeOutlined />,
		label: "Главная",
	},
	{
		key: "/project",
		icon: <FundProjectionScreenOutlined />,
		label: "Проекты",
	},
	{
		key: "/category",
		icon: <MenuUnfoldOutlined />,
		label: "Категории",
	},
	{
		key: "/region",
		icon: <MenuUnfoldOutlined />,
		label: "Регионы",
	},
]
export const useMenu = () => {
	return menuItems
}
