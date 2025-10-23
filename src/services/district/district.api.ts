import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { IParams } from "../service.types"
import { DistrictService } from "./district.service"

export const useGetAllDistrict = (params: IParams) => {
	return useQuery({
		queryKey: ["district", ...Object.values(params)],
		queryFn: () => DistrictService.getAll(params),
		staleTime: Infinity,
		placeholderData: keepPreviousData,
	})
}

