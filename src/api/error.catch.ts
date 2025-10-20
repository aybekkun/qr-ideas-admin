import type { ResponseError } from "@/services/service.types"

export const errorCatch = (error: ResponseError) => {
	if (
		error.response?.data?.errors &&
		Array.isArray(error.response?.data?.errors)
	) {
		return error.response?.data?.errors
	}
	if (error.response?.data?.message) {
		return error.response?.data?.message
	}
	return "Ошибка"
}
