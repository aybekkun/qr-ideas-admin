import { QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"
import { queryClient } from "./query.config"

export const TanstackQueryProvier = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
