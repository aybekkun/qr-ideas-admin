export type IVideo = {
	id: string
	name: {
		uz: string
		kaa: string
	}
	links: string[]
}

export type IVideoForm = {
	name_kaa: string
	name_uz: string
	add_links: string[]
}

export type IVideoUpdate = IVideoForm & {
	id: string
}