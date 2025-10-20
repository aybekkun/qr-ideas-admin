export type IRegion = {
	id: number
	name: string
}

export type IRegionForm = {
	name: string
}

export type IRegionUpdate = IRegionForm & {
	id: number
}
