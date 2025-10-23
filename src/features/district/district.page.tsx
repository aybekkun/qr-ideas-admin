import { PageHeader } from "@/components/shared"
import { AddButton, DataTable } from "@/components/ui"
import { useFilters } from "@/hooks"
import { useGetAllDistrict } from "@/services/district"
import { useDistrictColumns } from "./model"
import { DistrictForm } from "./ui"

export const DistrictPage = () => {
	const { filters, setFilters } = useFilters("/_layout/district/")
	const { data, isLoading } = useGetAllDistrict({
		limit: 10,
		page: filters.page ?? 1,
	})

	const columns = useDistrictColumns()

	return (
		<>
			<PageHeader title="Район">
				<AddButton />
			</PageHeader>
			<DistrictForm />
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
