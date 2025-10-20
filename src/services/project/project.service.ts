import { $authApi } from "@/api"
import type {
    IParams,
    IResponseData,
    IResponseSingleData,
} from "../service.types"
import type { IProject, IProjectForm } from "./project.types"

export const ProjectService = {
	getAll: async (params: IParams) => {
		const res = await $authApi.get<IResponseData<IProject>>("/projects", {
			params,
		})
		return res.data
	},

	getById: async (id: number | string) => {
		const res = await $authApi.get<IResponseSingleData<IProject>>(
			`/projects/${id}`
		)
		return res.data
	},

	create: async (formData: IProjectForm | FormData) => {
		const res = await $authApi.post<IResponseSingleData<IProject>>(
			"/projects",
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
			`/projects/${updateData.id}`,
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
		const res = await $authApi.delete(`/projects/${id}`)
		return res.data
	},
}
