import { keepPreviousData, QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: 2,
			placeholderData: keepPreviousData,
		},
	},
})
