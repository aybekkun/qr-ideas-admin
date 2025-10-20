import { App } from "antd"

export const useMessage = () => {
	const { notification, message } = App.useApp()
	return { message, notification }
}
