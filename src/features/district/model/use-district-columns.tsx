import type { IDistrict } from "@/services/district"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { DeleteDistrict } from "./delete-district"
import { EditButton } from "@/components/ui"

export const useDistrictColumns = () => {
	const columns: ColumnsType<IDistrict> = [
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
					<DeleteDistrict id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
