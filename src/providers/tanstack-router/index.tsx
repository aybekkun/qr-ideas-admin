import { routeTree } from "@/routeTree.gen"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { queryClient } from "../tanstack-query/query.config"
import { useAuthStore } from "@/store"
const router = createRouter({
	routeTree,
	context: {
		queryClient,
		auth: undefined!,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
})

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

export const TanstackRouterProvider = () => {
	const auth = useAuthStore()
	return (
		<RouterProvider
			router={router}
			context={{
				auth,
				queryClient,
			}}
		/>
	)
}
