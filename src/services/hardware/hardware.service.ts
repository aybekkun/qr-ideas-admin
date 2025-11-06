import { $authApi } from "@/api"
import type {
	IParams,
	IResponseData,
	IResponseSingleData,
} from "../service.types"
import type { IHardware, IHardwareForm } from "./hardware.types"

export const HardwareService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<IHardware>>("/hardware", {
			params,
		})
		return res.data
	},

	getById: async (id: number | string) => {
		const res = await $authApi.get<IResponseSingleData<IHardware>>(
			`/hardware/${id}`
		)
		return res.data
	},

	create: async (formData: IHardwareForm | FormData) => {
		const res = await $authApi.post<IResponseSingleData<IHardware>>(
			"/hardware",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		)
		return res.data
	},

	update: async (updateData: { id: string; form: FormData }) => {
		const res = await $authApi.put(
			`/hardware/${updateData.id}`,
			updateData.form,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		)
		return res.data
	},

	delete: async (id: string | number) => {
		const res = await $authApi.delete(`/hardware/${id}`)
		return res.data
	},
}
