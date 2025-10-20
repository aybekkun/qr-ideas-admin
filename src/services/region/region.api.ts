import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { IParams } from "../service.types"
import { RegionService } from "./region.service"

export const useGetAllRegion = (params: IParams) => {
	return useQuery({
		queryKey: ["region", ...Object.values(params)],
		queryFn: () => RegionService.getAll(params),
		staleTime: Infinity,
		placeholderData: keepPreviousData,
	})
}

