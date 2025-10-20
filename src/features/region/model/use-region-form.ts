import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import {
	RegionService,
	type IRegion,
	type IRegionForm,
} from "@/services/region"
import type { ResponseError } from "@/services/service.types"
import { isParamsFormValidate, useFormModalStore } from "@/store"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Form } from "antd"
import { useEffect } from "react"

export const useRegionForm = () => {
	const [form] = Form.useForm<IRegionForm>()
	const queryClient = useQueryClient()
	const { resetParams, params } = useFormModalStore()
	const { message } = useMessage()

	const createMutation = useMutation({
		mutationFn: RegionService.create,
		onSuccess: () => {
			message.success("Категория создана")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["region"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: RegionService.update,
		onSuccess: () => {
			message.success("Категория обновлена")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["region"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (isParamsFormValidate<IRegion>(params)) {
			form.setFieldsValue({
				name: params.name,
			})
		}
	}, [form, params])

	const onFinish = (values: IRegionForm) => {
		if (isParamsFormValidate<IRegion>(params)) {
			updateMutation.mutate({
				id: params.id,
				name: values.name,
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
