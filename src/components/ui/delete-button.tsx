import { DeleteOutlined } from "@ant-design/icons"
import { Button, Popconfirm } from "antd"
interface Props {
	onDelete: () => void
	isLoading?: boolean
	title?: string
}
export const DeleteButton = ({
	onDelete,
	title = "Действительно хотите удалить?",
	isLoading = false,
}: Props) => {
	return (
		<Popconfirm
			title={title}
			description="Востановить будет невозможно"
			onConfirm={onDelete}
			onCancel={() => console.log("cancel")}
			okText="Да"
			cancelText="Нет"
		>
			<Button
				loading={isLoading}
				type="primary"
				danger
				icon={<DeleteOutlined />}
			/>
		</Popconfirm>
	)
}
