import { PageHeader } from "@/components/shared"
import { AddButton, DataTable } from "@/components/ui"
import { useFilters } from "@/hooks"
import { useGetAllVideo } from "@/services/video"
import { useVideoColumns } from "./model"
import { VideoForm } from "./ui/video-form"

export const VideoPage = () => {
	const { filters, setFilters } = useFilters("/_layout/")
	const { data, isLoading } = useGetAllVideo({
		limit: 10,
		page: filters.page ?? 1,
	})

	const columns = useVideoColumns()

	return (
		<>
			<PageHeader title="Бизнес идеи">
				<AddButton />
			</PageHeader>

			<VideoForm />
			<DataTable
				loading={isLoading}
				rowKey={(record) => record.id}
				pagination={{
					current: filters.page ?? 1,
					total: data?.pagination?.count ?? 0,
					onChange: (page) => setFilters({ page: page }),
					showSizeChanger: false,
				}}
				dataSource={data?.data || []}
				columns={columns}
			/>
		</>
	)
}
