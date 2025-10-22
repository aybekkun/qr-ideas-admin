import dayjs from "dayjs"
import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import { useGetAllCategory } from "@/services/category"
import {
	ProjectService,
	type IProject,
	type IProjectForm,
} from "@/services/project"
import type { ResponseError } from "@/services/service.types"
import { isParamsFormValidate, useFormModalStore } from "@/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Form } from "antd"
import { useEffect, useState } from "react"
import { useGetAllRegion } from "@/services/region"

export const useProjectForm = () => {
	const [form] = Form.useForm<IProjectForm>()
	const queryClient = useQueryClient()
	const { resetParams, params } = useFormModalStore()
	const { message } = useMessage()
	const [deletedImages, setDeletedImages] = useState<string[]>([])

	const { data: categories } = useGetAllCategory({})
	const { data: regions } = useGetAllRegion({})
	const createMutation = useMutation({
		mutationFn: ProjectService.create,
		onSuccess: () => {
			message.success("Проект создан")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["project"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: ProjectService.update,
		onSuccess: () => {
			message.success("Проект обновлён")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["project"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (isParamsFormValidate<IProject>(params)) {
			form.setFieldsValue({
				category_id: params.category.id,
				name_kaa: params.name.kaa,
				name_uz: params.name.uz,
				description_kaa: params.description.kaa,
				description_uz: params.description.uz,
				goal_kaa: params.goal.kaa,
				goal_uz: params.goal.uz,
				production_kaa: params.production.kaa,
				production_uz: params.production.uz,
				job: params.job,
				deadline: dayjs(params.deadline),
				banking_partner: params.banking_partner,
				initiator: params.initiator,
				contact: params.contact,
				region_id: params.region?.id,
				district: params.district,
				url: params.url,
				files: params.images.map((url, index) => ({
					uid: String(index),
					name: url.split("/").pop() || `image-${index}`,
					status: "done",
					url,
				})),
			})
			setDeletedImages([])
		}
	}, [form, params])

	const onFinish = (values: IProjectForm) => {
		const formData = new FormData()
		console.log(values.files)
		formData.append("category_id", String(values.category_id))
		formData.append("name_kaa", values.name_kaa)
		formData.append("name_uz", values.name_uz)
		formData.append("description_kaa", values.description_kaa)
		formData.append("description_uz", values.description_uz)
		formData.append("goal_kaa", values.goal_kaa)
		formData.append("goal_uz", values.goal_uz)
		formData.append("production_kaa", values.production_kaa)
		formData.append("production_uz", values.production_uz)
		formData.append("job", String(values.job))
		formData.append("deadline", dayjs(values.deadline).format("YYYY-MM-DD"))
		formData.append("banking_partner", values.banking_partner)
		formData.append("initiator", values.initiator)
		formData.append("contact", values.contact)
		formData.append("region_id", String(values.region_id || ""))
		formData.append("district", values.district || "")

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

		if (isParamsFormValidate<IProject>(params)) {
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
		categories,
		regions,
	}
}
