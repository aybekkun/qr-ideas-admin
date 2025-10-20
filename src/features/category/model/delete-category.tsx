import { errorCatch } from "@/api/error.catch"
import { DeleteButton } from "@/components/ui"
import { useMessage } from "@/hooks"
import { CategoryService } from "@/services/category"
import type { ResponseError } from "@/services/service.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DeleteCategory = ({ id }: { id: string | number }) => {
	const queryClient = useQueryClient()
	const { message } = useMessage()
	const deleteMutation = useMutation({
		mutationFn: CategoryService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["category"] })
			message.success("Категория удалена")
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
