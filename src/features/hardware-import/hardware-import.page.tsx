import { PageHeader } from "@/components/shared"
import { DataTable } from "@/components/ui"
import { useFilters } from "@/hooks"
import { useGetAllHardwareImport } from "@/services/hardware-import"
import { useHardwareImportColumns } from "./model/use-hardware-import-columns"
import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"
import type { IParams } from "@/services/service.types"

export const HardwareImportPage = () => {
	const navigate = useNavigate()
	const { filters, setFilters } = useFilters("/_layout/hardware-import/")
	const params = filters as IParams
	const { data, isLoading } = useGetAllHardwareImport({
		limit: 10,
		page: params.page ?? 1,
	})
	const columns = useHardwareImportColumns()

	return (
		<>
			<PageHeader title="Инвестиционные проекты">
				<Button
					type="primary"
					icon={<PlusOutlined />}
					onClick={() => navigate({ to: "/hardware-import/create" })}
				>
					Добавить
				</Button>
			</PageHeader>
			<DataTable
				loading={isLoading}
				rowKey={(record) => record.id}
				pagination={{
					current: params.page ?? 1,
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
