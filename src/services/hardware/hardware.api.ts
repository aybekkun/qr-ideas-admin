import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { IParams } from "../service.types"
import { HardwareService } from "./hardware.service"

export const useGetAllHardware = (params: IParams) => {
	return useQuery({
		queryKey: ["hardware", ...Object.values(params)],
		queryFn: () => HardwareService.getAll(params),
		staleTime: Infinity,
		placeholderData: keepPreviousData,
	})
}
export const useGetByIdHardware = (id: number | string) => {
	return useQuery({
		queryKey: ["hardware-by-id", id],
		queryFn: () => HardwareService.getById(id),
		enabled: !!id,
	})
}
