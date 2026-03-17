import { HardwareImportPage } from "@/features/hardware-import"
import type { IParams } from "@/services/service.types"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/hardware-import/")({
	component: RouteComponent,
	validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
	return <HardwareImportPage />
}
