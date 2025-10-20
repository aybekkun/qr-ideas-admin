import { PageHeader } from "@/components/shared"
import { AddButton, DataTable } from "@/components/ui"
import { useFilters } from "@/hooks"
import { useGetAllProject } from "@/services/project"
import { useProjectColumns } from "./model"
import { ProjectForm } from "./ui/project-form"

export const ProjectPage = () => {
	const { filters, setFilters } = useFilters("/_layout/project/")
	const { data, isLoading } = useGetAllProject({
		limit: 10,
		page: filters.page ?? 1,
	})
	const columns = useProjectColumns()
	return (
		<>
			<PageHeader title="Проекты">
				<AddButton />
			</PageHeader>
			<ProjectForm />
			<DataTable
				loading={isLoading}
				rowKey={(record) => record.id}
				pagination={{
					current: filters.page ?? 1,
					total: data?.pagination.count ?? 0,
					onChange: (page) => setFilters({ page: page }),
					showSizeChanger: false,
				}}
				dataSource={data?.data || []}
				columns={columns}
			/>
		</>
	)
}
