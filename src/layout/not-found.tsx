import { useNavigate } from "@tanstack/react-router"
import { Button, Result } from "antd"
import { MainLayout } from "./main-layout"

export const NotFound = () => {
	const navigate = useNavigate()
	return (
		<MainLayout>
			<Result
				status="404"
				title="404"
				subTitle="Извините, страница не найдена."
				extra={
					<Button type="primary" onClick={() => navigate({ to: "/" })}>
						Вернуться на главную
					</Button>
				}
			/>
		</MainLayout>
	)
}
