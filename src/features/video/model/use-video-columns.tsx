import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { EditButton } from "@/components/ui"
import type { IVideo } from "@/services/video"
import { DeleteVideo } from "./delete-video"

export const useVideoColumns = () => {
	const columns: ColumnsType<IVideo> = [
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
			title: "Ссылки",
			dataIndex: "links",
			key: "links",
			render: (links: string[]) => (
				<div>
					{links.map((link, index) => (
						<div key={index}>
							<a href={link} target="_blank" rel="noopener noreferrer">
								{link}
							</a>
						</div>
					))}
				</div>
			),
		},
		{
			title: "Действия",
			key: "actions",
			width: 150,
			render: (record) => (
				<Space>
					<EditButton params={record} />
					<DeleteVideo id={record.id} />
				</Space>
			),
		},
	]
	return columns
}
