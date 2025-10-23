import type { Dayjs } from "dayjs"
import type { ICategory } from "../category"

export type IProject = {
	id: string
	category: ICategory

	name: {
		uz: string
		kaa: string
	}
	description: {
		uz: string
		kaa: string
	}
	goal: {
		uz: string
		kaa: string
	}
	production: {
		uz: string
		kaa: string
	}
	job: number
	deadline: string | Dayjs
	banking_partner: string
	initiator: string
	contact: string
	region: {
		id: number
		name: string
	} | null
	district: {
		id: number
		name: string
	} | null
	url: string
	created_at: string
	images: string[]
}

export type IProjectForm = {
	category_id: number
	name_kaa: string
	name_uz: string
	description_kaa: string
	description_uz: string
	goal_kaa: string
	goal_uz: string
	production_kaa: string
	production_uz: string
	job: number
	deadline: string | Dayjs
	banking_partner: string
	initiator: string
	contact: string
	region_id: number
	district: string | null
	url?: string
	district_id: number
	files: any[]
}
export type UploadFile = {
	uid: string
	name: string
	status?: "done" | "uploading" | "error"
	url?: string
}
export type IProjectUpdateForm = IProjectForm & {
	id: string
}
