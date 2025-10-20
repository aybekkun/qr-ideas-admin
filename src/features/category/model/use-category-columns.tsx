import type { ICategory } from "@/services/category"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { DeleteCategory } from "./delete-category"
import { EditButton } from "@/components/ui"

export const useCategoryColumns = () => {
	const columns: ColumnsType<ICategory> = [
		{
			title: "Название (KR)",
			dataIndex: ["name", "kaa"],
			key: "name",
		},
		{
			title: "Название (UZ)",
			dataIndex: ["name", "uz"],
			key: "name",
		},
		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: (record) => (
				<Space>
					<EditButton params={record} />
					<DeleteCategory id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
