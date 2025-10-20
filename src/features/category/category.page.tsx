import { PageHeader } from "@/components/shared"
import { AddButton, DataTable } from "@/components/ui"
import { useCategoryColumns } from "./model"
import { useFilters } from "@/hooks"
import { useGetAllCategory } from "@/services/category"
import { CategoryForm } from "./ui/category-form"

export const CategoryPage = () => {
	const { filters, setFilters } = useFilters("/_layout/category/")
	const { data, isLoading } = useGetAllCategory({
		limit: 10,
		page: filters.page ?? 1,
	})

	const columns = useCategoryColumns()

	return (
		<>
			<PageHeader title="Категорий">
				<AddButton />
			</PageHeader>
			<CategoryForm />
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
