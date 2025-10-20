import { FormModal } from "@/components/shared"
import { type ICategoryForm } from "@/services/category"
import { Form, Input } from "antd"
import { useCategoryForm } from "../model"

export const CategoryForm = () => {
	const { form, onFinish, isLoading } = useCategoryForm()
	return (
		<FormModal title={"категорию"} form={form} loading={isLoading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item<ICategoryForm>
					name={"name_kaa"}
					label={"Название (KR)"}
					rules={[
						{
							required: true,
							message: "Введите название (KR)",
							max: 255,
							min: 3,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item<ICategoryForm>
					name={"name_uz"}
					label={"Название (UZ)"}
					rules={[
						{
							required: true,
							message: "Введите название (KR)",
							max: 255,
							min: 3,
						},
					]}
				>
					<Input />
				</Form.Item>
			</Form>
		</FormModal>
	)
}
