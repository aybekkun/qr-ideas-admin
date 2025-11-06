import { PageHeader } from "@/components/shared"
import { AddButton, DataTable } from "@/components/ui"
import { useFilters } from "@/hooks"
import { useGetAllHardware } from "@/services/hardware"
import { useHardwareColumns } from "./model"
import { HardwareForm } from "./ui/hardware-form"

export const HardwarePage = () => {
	const { filters, setFilters } = useFilters("/_layout/hardware/")
	const { data, isLoading } = useGetAllHardware({
		limit: 10,
		page: filters.page ?? 1,
	})
	const columns = useHardwareColumns()
	return (
		<>
			<PageHeader title="Проекты">
				<AddButton />
			</PageHeader>
			<HardwareForm />
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
