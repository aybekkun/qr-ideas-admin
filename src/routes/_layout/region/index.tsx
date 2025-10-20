import { RegionPage } from "@/features/region"
import type { IParams } from "@/services/service.types"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/region/")({
	component: RouteComponent,
	validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
	return <RegionPage />
}
