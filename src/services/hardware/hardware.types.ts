import type { ICategory } from "../category"

export type IHardware = {
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
	initiator: string
	contact: string

	created_at: string
	images: string[]
}

export type IHardwareForm = {
	name_kaa: string
	name_uz: string
	description_kaa: string
	description_uz: string
	initiator: string
	contact: string
	files: any[]
}
export type UploadFile = {
	uid: string
	name: string
	status?: "done" | "uploading" | "error"
	url?: string
}
export type IHardwareUpdateForm = IHardwareForm & {
	id: string
}
