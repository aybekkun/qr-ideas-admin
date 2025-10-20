import { $authApi } from "@/api"
import type {
	IParams,
	IResponseData,
	IResponseSingleData,
} from "../service.types"
import type { IRegion, IRegionForm, IRegionUpdate } from "./region.types"

export const RegionService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<IRegion>>("/regions", {
			params,
		})
		return res.data
	},
	/* 	getById: async (id: number | string) => {
		const res = await $authHost.get<IResponseSingleData<IRegion>>(
			`/region/${id}`
		)
		return res.data
	}, */
	create: async (formData: IRegionForm) => {
		const res = await $authApi.post<IResponseSingleData<IRegion>>(
			"/regions",
			formData
		)
		return res.data
	},
	update: async (formData: IRegionUpdate) => {
		const { id, ...data } = formData
		const res = await $authApi.put<IResponseSingleData<IRegion>>(
			`/regions/${id}`,
			data
		)
		return res.data
	},
	delete: async (id: string | number) => {
		const res = await $authApi.delete(`/regions/${id}`)
		return res.data
	},
}
