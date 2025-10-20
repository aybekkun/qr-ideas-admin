import { useQuery } from "@tanstack/react-query"
import { AuthService } from "./auth.service"

export const useGetProfile = () => {
	return useQuery({
		queryKey: ["auth"],
		queryFn: () => AuthService.profile(),
		staleTime: Infinity,
	})
}
