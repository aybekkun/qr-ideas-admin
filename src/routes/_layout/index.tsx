import { VideoPage } from "@/features/video/video.page"
import type { IParams } from "@/services/service.types"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
	component: Index,
	validateSearch: () => ({}) as IParams,
})

function Index() {
	return <VideoPage />
}
