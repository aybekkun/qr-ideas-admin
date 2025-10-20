import { FormModal } from "@/components/shared"
import {
	Form,
	Input,
	InputNumber,
	DatePicker,
	Select,
	Upload,
	Row,
	Col,
} from "antd"
import type { IProjectForm } from "@/services/project"

import { InboxOutlined } from "@ant-design/icons"
import { useProjectForm } from "../model"

export const ProjectForm = () => {
	const { form, onFinish, isLoading, categories, regions, setDeletedImages } =
		useProjectForm()

	return (
		<FormModal width={900} title={"проект"} form={form} loading={isLoading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				{/* Категория */}
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="category_id"
							label="Категория"
							rules={[{ required: true, message: "Выберите категорию" }]}
						>
							<Select
								placeholder="Выберите категорию"
								options={categories?.data?.map((c) => ({
									label: c.name.kaa,
									value: c.id,
								}))}
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="region_id"
							label="Регион"
							rules={[{ required: true, message: "Выберите регион" }]}
						>
							<Select
								placeholder="Выберите категорию"
								options={regions?.data?.map((r) => ({
									label: r.name,
									value: r.id,
								}))}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item<IProjectForm>
					name="district"
					label="Район / Махалля"
					rules={[{ required: true, message: "Введите Район / Махалля" }]}
				>
					<Input />
				</Form.Item>
				{/* Название */}
				<Row gutter={[12, 12]}>
					<Col span={12}></Col>
					<Col span={12}></Col>
				</Row>
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="name_kaa"
							label="Название (KR)"
							rules={[{ required: true, message: "Введите название (KR)" }]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="name_uz"
							label="Название (UZ)"
							rules={[{ required: true, message: "Введите название (UZ)" }]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="description_kaa"
							label="Описание (KR)"
							rules={[{ required: true, message: "Введите описание (KR)" }]}
						>
							<Input.TextArea rows={3} />
						</Form.Item>
					</Col>
					<Col span={12}>
						{" "}
						<Form.Item<IProjectForm>
							name="description_uz"
							label="Описание (UZ)"
							rules={[{ required: true, message: "Введите описание (UZ)" }]}
						>
							<Input.TextArea rows={3} />
						</Form.Item>
					</Col>
				</Row>
				{/* Описание */}
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="goal_kaa"
							label="Цель (KR)"
							rules={[{ required: true, message: "Введите Цель" }]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="goal_uz"
							label="Цель (UZ)"
							rules={[{ required: true, message: "Введите Цель" }]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				{/* Цель */}

				{/* Производство */}
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="production_kaa"
							label="Производство (KR)"
							rules={[{ required: true, message: "Введите Производство" }]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="production_uz"
							label="Производство (UZ)"
							rules={[{ required: true, message: "Введите Производство" }]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>

				{/* Количество рабочих */}
				<Form.Item<IProjectForm>
					name="job"
					label="Количество рабочих мест"
					rules={[{ required: true, message: "Введите количество рабочих" }]}
				>
					<InputNumber min={1} style={{ width: "100%" }} />
				</Form.Item>

				{/* Дедлайн */}
				<Form.Item<IProjectForm>
					name="deadline"
					label="Начало работы"
					rules={[{ required: true, message: "Выберите дату дедлайна" }]}
				>
					<DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
				</Form.Item>

				{/* Банковский партнер */}
				<Form.Item<IProjectForm>
					name="banking_partner"
					label="Банковский партнёр"
					rules={[{ required: true, message: "Введите партнера" }]}
				>
					<Input />
				</Form.Item>
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="initiator"
							label="Инициатор"
							rules={[{ required: true, message: "Введите инициатора" }]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="contact"
							label="Контакт"
							rules={[{ required: true, message: "Введите контакт" }]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>

				{/* <Form.Item<IProjectForm>
					name="region_id"
					label="Регион"
					rules={[{ required: true, message: "Выберите регион" }]}
				>
					<Select
						placeholder="Выберите регион"
						options={regions.map(r => ({ label: r.name, value: r.id }))}
					/>
				</Form.Item> */}

				{/* Район */}

				{/* URL */}
				<Form.Item<IProjectForm> name="url" label="URL">
					<Input />
				</Form.Item>

				{/* Файлы */}
				<Form.Item<IProjectForm>
					name="files"
					label="Файлы"
					valuePropName="fileList"
					getValueFromEvent={(e) => e?.fileList}
				>
					<Upload.Dragger
						beforeUpload={() => false}
						maxCount={5}
						listType="picture"
						onRemove={(file) => {
							if (file.url) {
								// ✅ если пользователь удалил старое изображение — сохраняем URL
								setDeletedImages((prev) => [...prev, String(file.url)])
							}
						}}
					>
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<p className="ant-upload-text">
							Нажмите или перетащите файлы для загрузки
						</p>
					</Upload.Dragger>
				</Form.Item>
			</Form>
		</FormModal>
	)
}
