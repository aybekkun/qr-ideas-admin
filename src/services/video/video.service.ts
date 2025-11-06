import { $authApi } from "@/api"
import type {
	IParams,
	IResponseData,
	IResponseSingleData,
} from "../service.types"
import type { IVideo, IVideoForm, IVideoUpdate } from "./video.types"

export const VideoService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<IVideo>>("/videos", {
			params,
		})
		return res.data
	},

	create: async (formData: IVideoForm) => {
		const res = await $authApi.post<IResponseSingleData<IVideo>>(
			"/videos",
			formData
		)
		return res.data
	},

	update: async (formData: IVideoUpdate) => {
		const { id, ...data } = formData
		const res = await $authApi.put<IResponseSingleData<IVideo>>(
			`/videos/${id}`,
			data
		)
		return res.data
	},

	delete: async (id: string) => {
		const res = await $authApi.delete(`/videos/${id}`)
		return res.data
	},
}
