import { errorCatch } from "@/api/error.catch"
import { DeleteButton } from "@/components/ui"
import { useMessage } from "@/hooks"
import { DistrictService } from "@/services/district"
import type { ResponseError } from "@/services/service.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DeleteDistrict = ({ id }: { id: string | number }) => {
	const queryClient = useQueryClient()
	const { message } = useMessage()
	const deleteMutation = useMutation({
		mutationFn: DistrictService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["district"] })
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
