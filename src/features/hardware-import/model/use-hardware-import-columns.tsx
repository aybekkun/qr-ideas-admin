import type { IHardwareImport } from "@/services/hardware-import"
import { Button, Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { DeleteHardwareImport } from "./delete-hardware-import"
import { EditOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"

export const useHardwareImportColumns = (): ColumnsType<IHardwareImport> => {
	const navigate = useNavigate()

	const columns: ColumnsType<IHardwareImport> = [
		{
			title: "Название (KR)",
			dataIndex: ["name", "kaa"],
			key: "name_kaa",
		},
		{
			title: "Название (UZ)",
			dataIndex: ["name", "uz"],
			key: "name_uz",
		},
		{
			title: "Цена",
			dataIndex: "price",
			key: "price",
		},
		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: (record) => (
				<Space>
					<Button
						icon={<EditOutlined />}
						onClick={() =>
							navigate({
								to: "/hardware-import/$id",
								params: { id: record.id.toString() },
							})
						}
					/>
					<DeleteHardwareImport id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
