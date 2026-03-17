import { PageHeader } from "@/components/shared"
import type { IHardwareImportForm } from "@/services/hardware-import"
import { Button, Card, Col, Form, Input, Row, Upload } from "antd"
import { InboxOutlined, SaveOutlined } from "@ant-design/icons"
import { useHardwareImportForm } from "../model/use-hardware-import-form"
import { HardwareImportDescriptionField } from "./hardware-import-description-field"

export const HardwareImportForm = () => {
	const { form, onFinish, isLoading, setDeletedImages, id } =
		useHardwareImportForm()

	return (
		<>
			<PageHeader title={id ? "Редактирование проекта" : "Создание проекта"}>
				<Button
					type="primary"
					icon={<SaveOutlined />}
					loading={isLoading}
					onClick={() => form.submit()}
				>
					Сохранить
				</Button>
			</PageHeader>

			<Card loading={isLoading}>
				<Form form={form} layout="vertical" onFinish={onFinish}>
					<Row gutter={[16, 16]}>
						<Col span={12}>
							<Form.Item<IHardwareImportForm>
								name="name_kaa"
								label="Название (KR)"
								rules={[{ required: true, message: "Введите название (KR)" }]}
							>
								<Input placeholder="Название на каракалпакском" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item<IHardwareImportForm>
								name="name_uz"
								label="Название (UZ)"
								rules={[{ required: true, message: "Введите название (UZ)" }]}
							>
								<Input placeholder="Название на узбекском" />
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={[16, 16]}>
						<Col span={24}>
							<Form.Item<IHardwareImportForm>
								name="price"
								label="Цена"
								rules={[{ required: true, message: "Введите цену" }]}
							>
								<Input placeholder="10mln sum" />
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={[16, 16]}>
						<Col span={12}>
							<HardwareImportDescriptionField
								name="description_kaa"
								label="Описание (KR)"
							/>
						</Col>
						<Col span={12}>
							<HardwareImportDescriptionField
								name="description_uz"
								label="Описание (UZ)"
							/>
						</Col>
					</Row>

					<Form.Item<IHardwareImportForm>
						name="files"
						label="Изображения"
						valuePropName="fileList"
						getValueFromEvent={(e) => e?.fileList}
					>
						<Upload.Dragger
							beforeUpload={() => false}
							maxCount={5}
							listType="picture"
							onRemove={(file) => {
								if (file.url) {
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
			</Card>
		</>
	)
}
