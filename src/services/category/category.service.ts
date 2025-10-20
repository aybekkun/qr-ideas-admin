import { $authApi } from "@/api"
import type {
	IParams,
	IResponseData,
	IResponseSingleData,
} from "../service.types"
import type { ICategory, ICategoryForm, ICategoryUpdate } from "./category.types"

export const CategoryService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<ICategory>>("/category", {
			params,
		})
		return res.data
	},
	/* 	getById: async (id: number | string) => {
		const res = await $authHost.get<IResponseSingleData<ICategory>>(
			`/category/${id}`
		)
		return res.data
	}, */
	create: async (formData: ICategoryForm) => {
		const res = await $authApi.post<IResponseSingleData<ICategory>>(
			"/category",
			formData
		)
		return res.data
	},
	update: async (formData: ICategoryUpdate) => {
		const { id, ...data } = formData
		const res = await $authApi.put<IResponseSingleData<ICategory>>(
			`/category/${id}`,
			data
		)
		return res.data
	},
	delete: async (id: string | number) => {
		const res = await $authApi.delete(`/category/${id}`)
		return res.data
	},
}
