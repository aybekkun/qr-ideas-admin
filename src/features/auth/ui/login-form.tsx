import { useMessage } from "@/hooks"
import { AuthService, type ILoginForm } from "@/services/auth"
import { useAuthStore } from "@/store"
import { formatPhoneReverse } from "@/utils"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { Button, Card, Form, Input, Typography } from "antd"
import { useEffect } from "react"
import { PatternFormat } from "react-number-format"

export const LoginForm = () => {
	const [form] = Form.useForm<ILoginForm>()
	const { notification } = useMessage()
	const { setUser, logout } = useAuthStore()
	const navigate = useNavigate()
	const {
		mutate: login,
		isPending,
		isSuccess,
	} = useMutation({
		mutationFn: AuthService.login,
		onSuccess: (data) => {
			notification.success({
				message: "Вход успешен",
			})
			setUser(data.data)
		},
		onError: () => {
			notification.error({
				message: "Пароль или логин неверный",
			})
			logout()
		},
	})

	useEffect(() => {
		if (isSuccess) {
			navigate({ to: "/" })
		}
	}, [isSuccess])

	const onFinish = (values: ILoginForm) => {
		login({
			...values,
			phone: formatPhoneReverse(values.phone),
		})
	}

	return (
		<Card style={{ width: 360 }}>
			<Typography.Title style={{ textAlign: "center" }} level={3}>
				Логин
			</Typography.Title>
			<Form
				form={form}
				onFinish={onFinish}
				layout="vertical"
				autoComplete="off"
			>
				<Form.Item<ILoginForm>
					label={"Телефон номер"}
					name={"phone"}
					rules={[{ required: true }]}
					initialValue={""}
				>
					<PatternFormat format={"+998 ## ### ## ##"} customInput={Input} />
				</Form.Item>
				<Form.Item<ILoginForm> name="password" label="Пароль" required>
					<Input.Password />
				</Form.Item>
				<Form.Item label={null}>
					<Button loading={isPending} block type="primary" htmlType="submit">
						Войти
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}
