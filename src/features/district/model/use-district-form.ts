import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import {
	DistrictService,
	type IDistrict,
	type IDistrictForm,
} from "@/services/district"
import { useGetAllRegion } from "@/services/region"
import type { ResponseError } from "@/services/service.types"
import { isParamsFormValidate, useFormModalStore } from "@/store"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Form } from "antd"
import { useEffect } from "react"

export const useDistrictForm = () => {
	const [form] = Form.useForm<IDistrictForm>()
	const queryClient = useQueryClient()
	const { resetParams, params } = useFormModalStore()
	const { message } = useMessage()
	const { data: regions } = useGetAllRegion({})
	const createMutation = useMutation({
		mutationFn: DistrictService.create,
		onSuccess: () => {
			message.success("Категория создана")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["district"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: DistrictService.update,
		onSuccess: () => {
			message.success("Категория обновлена")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["district"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (isParamsFormValidate<IDistrict>(params)) {
			form.setFieldsValue({
				region_id: params.region.id,
				name_kaa: params.name.kaa ?? "",
				name_uz: params.name.uz ?? "",
			})
		}
	}, [form, params])

	const onFinish = (values: IDistrictForm) => {
		if (isParamsFormValidate<IDistrict>(params)) {
			updateMutation.mutate({
				id: params.id,
				name_kaa: values.name_kaa,
				name_uz: values.name_uz,
				region_id: values.region_id,
			})
		} else {
			createMutation.mutate(values)
		}
	}

	return {
		form,
		regions,
		onFinish,
		isLoading: updateMutation.isPending || createMutation.isPending,
	}
}
