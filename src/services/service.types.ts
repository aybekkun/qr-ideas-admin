import type { AxiosError } from "axios"

export type IPagination = {
	count: number
	next: string | null
	previous: string | null
}

export type IResponseData<T> = {
	data: T[]
	pagination: IPagination
}

export type IResponseSingleData<T> = {
	data: T
}

export type IParams = {
	id?: string | number
	page?: number
	limit?: number
	role_id?: number
	name?: string
}

export type ResponseError = AxiosError<{
	message?: string
	errors?: Array<string>
}>
