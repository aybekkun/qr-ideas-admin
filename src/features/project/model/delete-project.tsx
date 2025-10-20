import { errorCatch } from "@/api/error.catch"
import { DeleteButton } from "@/components/ui"
import { useMessage } from "@/hooks"
import { ProjectService } from "@/services/project"
import type { ResponseError } from "@/services/service.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DeleteProject = ({ id }: { id: string | number }) => {
	const queryClient = useQueryClient()
	const { message } = useMessage()
	const deleteMutation = useMutation({
		mutationFn: ProjectService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["project"] })
			message.success("Проект удалена")
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
