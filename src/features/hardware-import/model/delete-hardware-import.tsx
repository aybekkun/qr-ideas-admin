import { errorCatch } from "@/api/error.catch"
import { DeleteButton } from "@/components/ui"
import { useMessage } from "@/hooks"
import { HardwareImportService } from "@/services/hardware-import"
import type { ResponseError } from "@/services/service.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DeleteHardwareImport = ({ id }: { id: number }) => {
	const queryClient = useQueryClient()
	const { message } = useMessage()
	const deleteMutation = useMutation({
		mutationFn: HardwareImportService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["hardware-import"] })
			message.success("Инвестиционный проект удален")
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
