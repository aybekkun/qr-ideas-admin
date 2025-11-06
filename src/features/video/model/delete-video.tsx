import { errorCatch } from "@/api/error.catch"
import { DeleteButton } from "@/components/ui"
import { useMessage } from "@/hooks"

import type { ResponseError } from "@/services/service.types"
import { VideoService } from "@/services/video/video.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DeleteVideo = ({ id }: { id: string }) => {
	const queryClient = useQueryClient()
	const { message } = useMessage()

	const deleteMutation = useMutation({
		mutationFn: VideoService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["video"] })
			message.success("Видео удалено")
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	return (
		<DeleteButton
			onDelete={() => deleteMutation.mutate(id)}
			isLoading={deleteMutation.isPending}
		/>
	)
}
