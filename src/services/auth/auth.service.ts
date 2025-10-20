import { $authHost, $host } from "@/api"
import type { ILoginForm, IUser } from "./auth.types"
import type { IResponseSingleData } from "../service.types"

export const AuthService = {
	login: async (formData: ILoginForm) => {
		const res = await $host.post<IResponseSingleData<IUser>>("/login", formData)
		return res.data
	},
	profile: async () => {
		const res = await $authHost.get<IResponseSingleData<IUser>>("/profile")
		return res.data
	},
}
