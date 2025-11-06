import { FormModal } from "@/components/shared"
import type { IHardwareForm } from "@/services/hardware"
import { Col, Form, Input, Row, Upload } from "antd"

import { InboxOutlined } from "@ant-design/icons"
import { useHardwareForm } from "../model"
import { PatternFormat } from "react-number-format"

export const HardwareForm = () => {
	const {
		form,
		onFinish,

		isLoading,

		setDeletedImages,
	} = useHardwareForm()

	return (
		<FormModal width={900} title={"проект"} form={form} loading={isLoading}>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				{/* Категория */}

				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IHardwareForm>
							name="name_kaa"
							label="Название (KR)"
							rules={[{ required: true, message: "Введите название (KR)" }]}
						>
							<Input placeholder="Gúrishti qayta islew kompleksi" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IHardwareForm>
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
						<Form.Item<IHardwareForm>
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
						<Form.Item<IHardwareForm>
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
				<Row gutter={[12, 12]}>
					<Col span={12}>
						<Form.Item<IHardwareForm>
							name="initiator"
							label="Инициатор"
							rules={[{ required: true, message: "Введите инициатора" }]}
						>
							<Input placeholder="Kegeyli Agro Group" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item<IHardwareForm>
							label={"Контакт"}
							name={"contact"}
							rules={[{ required: true }]}
							initialValue={""}
						>
							<PatternFormat format={"+998 ## ### ## ##"} customInput={Input} />
						</Form.Item>
					</Col>
				</Row>
				<Form.Item<IHardwareForm>
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
