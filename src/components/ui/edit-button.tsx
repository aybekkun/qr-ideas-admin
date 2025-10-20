import { useFormModalStore, type ParamsForm } from "@/store"
import { EditOutlined } from "@ant-design/icons"
import { Button } from "antd"
interface Props {
	params: ParamsForm
}
export const EditButton = ({ params }: Props) => {
	const setParams = useFormModalStore((state) => state.setParams)

	return <Button onClick={() => setParams(params)} icon={<EditOutlined />} />
}
