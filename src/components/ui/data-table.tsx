import { Table, type TableProps } from "antd"

export const DataTable = <T extends object>(props: TableProps<T>) => {
	return (
		<Table
			{...props}
			bordered
			scroll={{
				x: "auto",
			}}
		/>
	)
}
