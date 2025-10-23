import { $authApi } from "@/api"
import type {
	IParams,
	IResponseData,
	IResponseSingleData,
} from "../service.types"
import type { IDistrict, IDistrictForm, IDistrictUpdate } from "./district.types"

export const DistrictService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<IDistrict>>("/districts", {
			params,
		})
		return res.data
	},
	/* 	getById: async (id: number | string) => {
		const res = await $authHost.get<IResponseSingleData<IDistrict>>(
			`/district/${id}`
		)
		return res.data
	}, */
	create: async (formData: IDistrictForm) => {
		const res = await $authApi.post<IResponseSingleData<IDistrict>>(
			"/districts",
			formData
		)
		return res.data
	},
	update: async (formData: IDistrictUpdate) => {
		const { id, ...data } = formData
		const res = await $authApi.put<IResponseSingleData<IDistrict>>(
			`/districts/${id}`,
			data
		)
		return res.data
	},
	delete: async (id: string | number) => {
		const res = await $authApi.delete(`/district/${id}`)
		return res.data
	},
}
