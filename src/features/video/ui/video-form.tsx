import { FormModal } from "@/components/shared"
import { type IVideoForm } from "@/services/video"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input } from "antd"
import { useVideoForm } from "../model"

export const VideoForm = () => {
	const { form, onFinish, isLoading} = useVideoForm()

	return (
		<FormModal title={"видео"} form={form} loading={isLoading}>

			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item<IVideoForm>
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

				<Form.Item<IVideoForm>
					name={"name_uz"}
					label={"Название (UZ)"}
					rules={[
						{
							required: true,
							message: "Введите название (UZ)",
							max: 255,
							min: 3,
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.List name="add_links">
					{(fields, { add, remove }) => (
						<>
							{fields.map((field) => (
								<Flex key={field.key} align="center">
									<Form.Item
										{...field}
										style={{ width: "90%" }}
										rules={[{ required: true, message: "Введите ссылку" }]}
									>
										<Input placeholder="Ссылка на видео" />
									</Form.Item>
									<MinusCircleOutlined
										style={{
											paddingBottom: "30px",
											marginLeft: 20,
											marginRight: "20",
										}}
										onClick={() => remove(field.name)}
									/>
								</Flex>
							))}
							<Form.Item>
								<Button
									type="dashed"
									onClick={() => add()}
									block
									icon={<PlusOutlined />}
								>
									Добавить ссылку
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
			</Form>
		</FormModal>
	)
}
