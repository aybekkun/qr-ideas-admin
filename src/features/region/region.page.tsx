import { PageHeader } from "@/components/shared"
import { AddButton, DataTable } from "@/components/ui"
import { useRegionColumns } from "./model"
import { useFilters } from "@/hooks"
import { useGetAllRegion } from "@/services/region"
import { RegionForm } from "./ui/region-form"

export const RegionPage = () => {
	const { filters, setFilters } = useFilters("/_layout/region/")
	const { data, isLoading } = useGetAllRegion({
		limit: 10,
		page: filters.page ?? 1,
	})

	const columns = useRegionColumns()

	return (
		<>
			<PageHeader title="Категорий">
				<AddButton />
			</PageHeader>
			<RegionForm />
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
