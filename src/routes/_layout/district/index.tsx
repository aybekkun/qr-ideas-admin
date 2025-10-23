import { DistrictPage } from "@/features/district"
import type { IParams } from "@/services/service.types"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/district/")({
	component: RouteComponent,
	validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
	return <DistrictPage />
}
