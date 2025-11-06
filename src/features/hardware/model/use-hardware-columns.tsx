import { EditButton } from "@/components/ui"
import type { IHardware } from "@/services/hardware"
import { formatPhone } from "@/utils"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { DeleteHardware } from "./delete-hardware"

export const useHardwareColumns = (): ColumnsType<IHardware> => {
	const columns: ColumnsType<IHardware> = [
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
			title: "Инициатор",
			dataIndex: "initiator",
			key: "initiator",
		},

		{
			title: "Контакт",
			dataIndex: "contact",
			key: "contact",
			render: formatPhone,
		},
		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: (record) => (
				<Space>
					<EditButton params={record} />
					<DeleteHardware id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
