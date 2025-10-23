export type IRegion = {
	id: number
	name: {
		kaa: string | null
		uz: string | null
	}
}

export type IRegionForm = {
	name_kaa: string
	name_uz: string
}

export type IRegionUpdate = IRegionForm & {
	id: number
}
