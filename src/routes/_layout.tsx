import { MainLayout } from "@/layout"
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAuth) {
			throw redirect({
				to: "/auth",
				search: {
					redirect: location.href,
				},
			})
		}
	},
})

function RouteComponent() {
	return (
		<MainLayout>
			<Outlet />
		</MainLayout>
	)
}
