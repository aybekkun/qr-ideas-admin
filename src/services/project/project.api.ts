import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { IParams } from "../service.types"
import { ProjectService } from "./project.service"

export const useGetAllProject = (params: IParams) => {
	return useQuery({
		queryKey: ["project", ...Object.values(params)],
		queryFn: () => ProjectService.getAll(params),
		staleTime: Infinity,
		placeholderData: keepPreviousData,
	})
}
export const useGetByIdProject = (id: number | string) => {
	return useQuery({
		queryKey: ["project-by-id", id],
		queryFn: () => ProjectService.getById(id),
		enabled: !!id,
	})
}
