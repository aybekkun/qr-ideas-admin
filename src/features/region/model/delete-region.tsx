import { errorCatch } from "@/api/error.catch"
import { DeleteButton } from "@/components/ui"
import { useMessage } from "@/hooks"
import { RegionService } from "@/services/region"
import type { ResponseError } from "@/services/service.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DeleteRegion = ({ id }: { id: string | number }) => {
	const queryClient = useQueryClient()
	const { message } = useMessage()
	const deleteMutation = useMutation({
		mutationFn: RegionService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["region"] })
			message.success("Регион удален")
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
