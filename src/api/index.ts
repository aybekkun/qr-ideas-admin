import axios, { type InternalAxiosRequestConfig } from "axios"

const _API_KEY = import.meta.env.VITE_API_KEY

const $authHost = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
})
const $authApi = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
})

$authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = localStorage.getItem("token")
	const currentLanguage =
		(localStorage.getItem("lang") ?? "kaa").split("-")[0] || "kaa"

	config.headers["Accept-Language"] = currentLanguage
	config.headers.Authorization = `Bearer ${token ?? ""}`

	return config
})

$authApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = localStorage.getItem("token")
	config.headers.Authorization = `Bearer ${token ?? ""}`
	config.headers["Accept-Language"] = "all"
	return config
})

const $host = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
})

export { $host, $authHost, $authApi }
