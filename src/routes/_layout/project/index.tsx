import { ProjectPage } from "@/features/project"
import type { IParams } from "@/services/service.types"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/project/")({
	component: RouteComponent,
	validateSearch: () => ({}) as IParams,
})

function RouteComponent() {
	return <ProjectPage />
}
