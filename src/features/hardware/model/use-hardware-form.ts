import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import {
	HardwareService,
	type IHardware,
	type IHardwareForm,
} from "@/services/hardware"
import type { ResponseError } from "@/services/service.types"
import { isParamsFormValidate, useFormModalStore } from "@/store"
import { formatPhoneForm, formatPhoneReverse } from "@/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Form } from "antd"
import { useEffect, useState } from "react"

export const useHardwareForm = () => {
	const [form] = Form.useForm<IHardwareForm>()
	const queryClient = useQueryClient()
	const { resetParams, params } = useFormModalStore()
	const { message } = useMessage()
	const [deletedImages, setDeletedImages] = useState<string[]>([])

	const createMutation = useMutation({
		mutationFn: HardwareService.create,
		onSuccess: () => {
			message.success("Оборудование создан")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["hardware"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: HardwareService.update,
		onSuccess: () => {
			message.success("Оборудование обновлён")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["hardware"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (isParamsFormValidate<IHardware>(params)) {
			form.setFieldsValue({
				name_kaa: params.name.kaa,
				name_uz: params.name.uz,
				description_kaa: params.description.kaa,
				description_uz: params.description.uz,

				initiator: params.initiator,
				contact: formatPhoneForm(params.contact),

				files: params.images.map((url, index) => ({
					uid: String(index),
					name: url.split("/").pop() || `image-${index}`,
					status: "done",
					url,
				})),
			})

			setDeletedImages([])
			return () => {
				setDeletedImages([])
			}
		}
	}, [form, params])

	const onFinish = (values: IHardwareForm) => {
		const formData = new FormData()
		console.log(values.files)

		formData.append("name_kaa", values.name_kaa)
		formData.append("name_uz", values.name_uz)
		formData.append("description_kaa", values.description_kaa)
		formData.append("description_uz", values.description_uz)

		formData.append("initiator", values.initiator)

		formData.append("contact", formatPhoneReverse(values.contact))

		// --- Обработка файлов ---
		values.files.forEach((file: any) => {
			if (file.originFileObj) {
				// Новый файл (пользователь загрузил)
				formData.append("files", file.originFileObj)
			}
		})
		if (deletedImages.length > 0) {
			formData.append("deleting_images", JSON.stringify(deletedImages))
		}

		if (isParamsFormValidate<IHardware>(params)) {
			updateMutation.mutate({ id: params.id, form: formData })
		} else {
			createMutation.mutate(formData)
		}
	}

	return {
		form,
		onFinish,
		setDeletedImages,
		isLoading: updateMutation.isPending || createMutation.isPending,
	}
}
