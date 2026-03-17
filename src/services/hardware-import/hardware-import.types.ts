export type IDescriptionKey = {
	name: string
	value: string
}

export type IDescriptionSection = {
	section: string
	key: IDescriptionKey[]
}

export type IHardwareImport = {
	id: string
	name: {
		uz: string
		kaa: string
	}
	description: {
		uz: IDescriptionSection[]
		kaa: IDescriptionSection[]
	}
	price: string
	images: string[]
	created_at: string
	updated_at: string
}

export type IHardwareImportForm = {
	name_uz: string
	name_kaa: string
	description_uz: IDescriptionSection[]
	description_kaa: IDescriptionSection[]
	price: string
	files: any[]
}

export type IHardwareImportUpdateForm = {
	id: string
	form: FormData
}
