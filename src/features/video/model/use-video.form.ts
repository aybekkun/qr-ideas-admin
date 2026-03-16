import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import type { ResponseError } from "@/services/service.types"
import { VideoService, type IVideo, type IVideoForm } from "@/services/video"
import { isParamsFormValidate, useFormModalStore } from "@/store"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Form } from "antd"
import { useEffect } from "react"

export const useVideoForm = () => {
	const [form] = Form.useForm<IVideoForm>()
	const queryClient = useQueryClient()
	const { resetParams, params } = useFormModalStore()
	const { message } = useMessage()

	const createMutation = useMutation({
		mutationFn: VideoService.create,
		onSuccess: () => {
			message.success("Видео создано")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["video"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: VideoService.update,
		onSuccess: () => {
			message.success("Видео обновлено")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["video"] })
			resetParams()
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (isParamsFormValidate<IVideo>(params)) {
			form.setFieldsValue({
				name_kaa: params.name.kaa ?? "",
				name_uz: params.name.uz ?? "",
				add_links: params.links ?? [],
			})
		}
	}, [form, params])

	const onFinish = (values: IVideoForm) => {
		if (isParamsFormValidate<IVideo>(params)) {
			updateMutation.mutate({
				id: params.id,
				...values,
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
