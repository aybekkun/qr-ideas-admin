import { HardwareImportForm } from "@/features/hardware-import/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/hardware-import/$id")({
	component: RouteComponent,
})

function RouteComponent() {
	return <HardwareImportForm />
}
