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
	{
		key: "/district",
		icon: <MenuUnfoldOutlined />,
		label: "Районы",
	},
]
export const useMenu = () => {
	return menuItems
}
