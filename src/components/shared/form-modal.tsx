import { useFormModalStore } from "@/store/use-form-modal-store"
import { Modal, type FormInstance, type ModalProps } from "antd"
import type { PropsWithChildren } from "react"
import { useShallow } from "zustand/shallow"

type FormModalProps = {
	title?: string
	form: FormInstance
	width?: number | string
	loading?: boolean
} & PropsWithChildren &
	ModalProps

export const FormModal = ({
	title = "Форма",
	children,
	width = 520,
	form,
	loading = false,
	...rest
}: FormModalProps) => {
	const { isForm, resetParams, params } = useFormModalStore(
		useShallow((state) => state)
	)

	const onOk = () => {
		form.submit()
	}
	const onCancel = () => {
		resetParams()
		form.resetFields()
	}
	return (
		<Modal
			open={isForm}
			title={(params ? "Изменить " : "Создать ") + title}
			width={width}
			onOk={onOk}
			okText={params ? "Изменить" : "Сохранить"}
			cancelText="Отмена"
			onCancel={onCancel}
			confirmLoading={loading}
			{...rest}
		>
			{children}
		</Modal>
	)
}
