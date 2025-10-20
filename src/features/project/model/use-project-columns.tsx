import type { IProject } from "@/services/project"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { DeleteProject } from "./delete-project"
import { formatDate, formatPrice } from "@/utils"
import { EditButton } from "@/components/ui"

export const useProjectColumns = (): ColumnsType<IProject> => {
	const columns: ColumnsType<IProject> = [
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
			title: "Рабочих мест",
			dataIndex: "job",
			key: "job",
			render: formatPrice,
		},
		{
			title: "Дата окончания",
			dataIndex: "deadline",
			key: "deadline",
			render: formatDate,
		},
		{
			title: "Банковский партнёр",
			dataIndex: "banking_partner",
			key: "banking_partner",
		},
		{
			title: "Контакт",
			dataIndex: "contact",
			key: "contact",
		},
		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: (record) => (
				<Space>
					<EditButton params={record}/>
					<DeleteProject id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
