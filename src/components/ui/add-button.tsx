import { useFormModalStore } from "@/store"
import { Button } from "antd"

export const AddButton = () => {
	const toggleForm = useFormModalStore((state) => state.toggleForm)
	return <Button onClick={toggleForm}>Добавить</Button>
}
