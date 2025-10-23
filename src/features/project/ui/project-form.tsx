import { FormModal } from "@/components/shared"
import type { IProjectForm } from "@/services/project"
import { Col, DatePicker, Form, Input, Row, Select, Upload } from "antd"

import { InputPrice } from "@/components/ui"
import { InboxOutlined } from "@ant-design/icons"
import { PatternFormat } from "react-number-format"
import { useProjectForm } from "../model"

export const ProjectForm = () => {
	const {
		form,
		onFinish,
		districts,
		isLoading,
		categories,
		regions,
		setDeletedImages,
		selectedRegion,
		setSelectedRegion,
	} = useProjectForm()

	return (
		<FormModal width={900} title={"проект"} form={form} loading={isLoading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				{/* Категория */}
				<Row gutter={[12, 12]}>
					<Col span={6}>
						<Form.Item<IProjectForm>
							name="deadline"
							label="Начало работы"
							rules={[{ required: true, message: "Выберите дату дедлайна" }]}
						>
							<DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
						</Form.Item>
					</Col>
					<Col span={6}>
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

					<Col span={6}>
						<Form.Item<IProjectForm>
							name="region_id"
							label="Регион"
							rules={[{ required: true, message: "Выберите регион" }]}
						>
							<Select
								onChange={(value) => {
									setSelectedRegion(value)
									// сбрасываем выбранный район при смене региона
									form.setFieldsValue({ district_id: undefined })
								}}
								placeholder="Выберите категорию"
								options={regions?.data?.map((r) => ({
									label: r.name.kaa,
									value: r.id,
								}))}
							/>
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item<IProjectForm>
							name="district_id"
							label="Район / Махалля"
							rules={[{ required: true, message: "Введите Район / Махалля" }]}
						>
							<Select
								showSearch
								optionFilterProp="label"
								disabled={!selectedRegion} 
								placeholder="Выберите Район / Махалля"
								options={districts.map((d) => ({
									label: d.name.kaa,
									value: d.id,
								}))}
								filterOption={(input, option) =>
									(option?.label ?? "")
										.toLowerCase()
										.includes(input.toLowerCase())
								}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="initiator"
							label="Инициатор"
							rules={[{ required: true, message: "Введите инициатора" }]}
						>
							<Input placeholder="Kegeyli Agro Group" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							label={"Контакт"}
							name={"contact"}
							rules={[{ required: true }]}
							initialValue={""}
						>
							<PatternFormat format={"+998 ## ### ## ##"} customInput={Input} />
						</Form.Item>
					</Col>
				</Row>
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
							<Input placeholder="Gúrishti qayta islew kompleksi" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="name_uz"
							label="Название (UZ)"
							rules={[{ required: true, message: "Введите название (UZ)" }]}
						>
							<Input placeholder="Guruchni qayta ishlash majmuasi" />
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
							<Input.TextArea
								placeholder="Zamonaviy saralash va tozalash texnologiyasiga ega guruchni maydalash va qadoqlash zavodi."
								rows={3}
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="description_uz"
							label="Описание (UZ)"
							rules={[{ required: true, message: "Введите описание (UZ)" }]}
						>
							<Input.TextArea
								placeholder="Zamonaviy saralash va tozalash texnologiyasiga ega guruchni maydalash va qadoqlash zavodi."
								rows={3}
							/>
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
							<Input placeholder="Jergilikli gúrishti ishki hám eksport bazarları ushın qayta islew hám qadaqlaw" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="goal_uz"
							label="Цель (UZ)"
							rules={[{ required: true, message: "Введите Цель" }]}
						>
							<Input placeholder="Mahalliy guruchni ichki va eksport bozorlari uchun qayta ishlash va qadoqlash" />
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
						>
							<Input placeholder="Jılına 3500 tonna." />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="production_uz"
							label="Производство (UZ)"
						>
							<Input placeholder="Yiliga 3500 tonna" />
						</Form.Item>
					</Col>
				</Row>

				{/* Количество рабочих */}
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="job"
							label="Количество рабочих мест"
							rules={[
								{ required: true, message: "Введите количество рабочих" },
							]}
						>
							<InputPrice
								min={1}
								style={{ width: "100%" }}
								placeholder="150 000"
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IProjectForm>
							name="banking_partner"
							label="Банковский партнёр"
							rules={[{ required: true, message: "Введите партнера" }]}
						>
							<Input placeholder="Agrobank Qaraqalpaq bo‘limi" />
						</Form.Item>
					</Col>
				</Row>

				{/* Дедлайн */}

				{/* Банковский партнер */}

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
