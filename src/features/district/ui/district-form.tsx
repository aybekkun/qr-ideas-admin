import { FormModal } from "@/components/shared"
import { type IDistrictForm } from "@/services/district"
import { Form, Input, Select } from "antd"
import { useDistrictForm } from "../model"

export const DistrictForm = () => {
	const { form, onFinish, isLoading, regions } = useDistrictForm()
	return (
		<FormModal title={"категорию"} form={form} loading={isLoading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item<IDistrictForm>
					name="region_id"
					label="Регион"
					rules={[{ required: true, message: "Выберите регион" }]}
				>
					<Select
						placeholder="Выберите категорию"
						options={regions?.data?.map((r) => ({
							label: r.name.kaa,
							value: r.id,
						}))}
					/>
				</Form.Item>
				<Form.Item<IDistrictForm>
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
				<Form.Item<IDistrictForm>
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
