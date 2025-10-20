import { FormModal } from "@/components/shared"
import { type IRegionForm } from "@/services/region"
import { Form, Input } from "antd"
import { useRegionForm } from "../model"

export const RegionForm = () => {
	const { form, onFinish, isLoading } = useRegionForm()
	return (
		<FormModal title={"категорию"} form={form} loading={isLoading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item<IRegionForm>
					name={"name"}
					label={"Название"}
					rules={[
						{
							required: true,
							message: "Введите название",
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
