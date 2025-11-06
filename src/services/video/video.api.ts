import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { IParams } from "../service.types"
import { VideoService } from "./video.service"

export const useGetAllVideo = (params: IParams) => {
	return useQuery({
		queryKey: ["video", ...Object.values(params)],
		queryFn: () => VideoService.getAll(params),
		staleTime: Infinity,
		placeholderData: keepPreviousData,
	})
}
