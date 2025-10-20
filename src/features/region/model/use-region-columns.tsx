import type { IRegion } from "@/services/region"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { DeleteRegion } from "./delete-region"
import { EditButton } from "@/components/ui"

export const useRegionColumns = () => {
	const columns: ColumnsType<IRegion> = [
		{
			title: "Название (KR)",
			dataIndex: "name",
			key: "name",
		},

		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: (record) => (
				<Space>
					<EditButton params={record} />
					<DeleteRegion id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
