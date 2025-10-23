import type { IRegion } from "../region"

export type IDistrict = {
	id: number
	name: {
		kaa: string | null
		uz: string | null
	}
	region: IRegion
}

export type IDistrictForm = {
	region_id: number
	name_kaa: string
	name_uz: string
}

export type IDistrictUpdate = IDistrictForm & {
	id: number
}
