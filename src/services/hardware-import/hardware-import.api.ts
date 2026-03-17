import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { IParams } from "../service.types"
import { HardwareImportService } from "./hardware-import.service"

export const useGetAllHardwareImport = (params: IParams) => {
	return useQuery({
		queryKey: ["hardware-import", ...Object.values(params)],
		queryFn: () => HardwareImportService.getAll(params),
		staleTime: Infinity,
		placeholderData: keepPreviousData,
	})
}

export const useGetByIdHardwareImport = (id: string) => {
	return useQuery({
		queryKey: ["hardware-import-by-id", id],
		queryFn: () => HardwareImportService.getById(id),
		enabled: !!id,
	})
}
