import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import {
	CategoryService,
	type ICategory,
	type ICategoryForm,
} from "@/services/category"
import type { ResponseError } from "@/services/service.types"
import { isParamsFormValidate, useFormModalStore } from "@/store"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Form } from "antd"
import { useEffect } from "react"

export const useCategoryForm = () => {
	const [form] = Form.useForm<ICategoryForm>()
	const queryClient = useQueryClient()
	const { resetParams, params } = useFormModalStore()
	const { message } = useMessage()

	const createMutation = useMutation({
		mutationFn: CategoryService.create,
		onSuccess: () => {
			message.success("Категория создана")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["category"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: CategoryService.update,
		onSuccess: () => {
			message.success("Категория обновлена")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["category"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (isParamsFormValidate<ICategory>(params)) {
			form.setFieldsValue({
				name_kaa: params.name.kaa ?? "",
				name_uz: params.name.uz ?? "",
			})
		}
	}, [form, params])

	const onFinish = (values: ICategoryForm) => {
		if (isParamsFormValidate<ICategory>(params)) {
			updateMutation.mutate({
				id: params.id,
				name_kaa: values.name_kaa,
				name_uz: values.name_uz,
			})
		} else {
			createMutation.mutate(values)
		}
	}

	return {
		form,
		onFinish,
		isLoading: updateMutation.isPending || createMutation.isPending,
	}
}
