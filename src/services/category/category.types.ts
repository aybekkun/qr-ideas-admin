export type ICategory = {
	id: number
	name: {
		kaa: string | null
		uz: string | null
	}
}

export type ICategoryForm = {
	name_kaa: string
	name_uz: string
}

export type ICategoryUpdate = ICategoryForm &{
	id: number
}