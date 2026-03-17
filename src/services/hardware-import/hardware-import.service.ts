import { $authApi } from "@/api"
import type {
	IParams,
	IResponseData,
	IResponseSingleData,
} from "../service.types"
import type {
	IHardwareImport,
	IHardwareImportUpdateForm,
} from "./hardware-import.types"

export const HardwareImportService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<IHardwareImport>>(
			"/hardware-import",
			{
				params,
			},
		)
		return res.data
	},

	getById: async (id: string) => {
		const res = await $authApi.get<IResponseSingleData<IHardwareImport>>(
			`/hardware-import/${id}`,
		)
		return res.data
	},

	create: async (formData: FormData) => {
		const res = await $authApi.post<IResponseSingleData<IHardwareImport>>(
			"/hardware-import",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			},
		)
		return res.data
	},

	update: async (data: IHardwareImportUpdateForm) => {
		const res = await $authApi.put<IResponseSingleData<IHardwareImport>>(
			`/hardware-import/${data.id}`,
			data.form,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			},
		)
		return res.data
	},

	delete: async (id: number) => {
		const res = await $authApi.delete(`/hardware-import/${id}`)
		return res.data
	},
}
