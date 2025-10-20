import { CategoryPage } from "@/features/category"
import type { IParams } from "@/services/service.types"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/category/")({
	component: RouteComponent,
	validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
	return <CategoryPage />
}
