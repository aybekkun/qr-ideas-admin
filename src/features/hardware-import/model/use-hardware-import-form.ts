import { errorCatch } from "@/api/error.catch"
import { useMessage } from "@/hooks"
import {
	HardwareImportService,
	useGetByIdHardwareImport,
	type IHardwareImportForm,
} from "@/services/hardware-import"
import type { ResponseError } from "@/services/service.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate, useParams } from "@tanstack/react-router"
import { Form } from "antd"
import { useEffect, useState } from "react"

export const DEFAULT_DESCRIPTION_KAA = [
	{
		section: "Texnologiya protsessi",
		key: [
			{ name: "Úskene", value: "" },
			{ name: "Quwatlılıǵı", value: "" },
			{ name: "Elektr sarplanıwı", value: "" },
			{ name: "Jumısshı sanı", value: "" },
		],
	},
	{
		section: "Bir aylıq ortasha qárejet",
		key: [
			{ name: "Shiyki zat", value: "" },
			{ name: "Elektr energiyası", value: "" },
			{ name: "İs haqı", value: "" },
			{ name: "Basqa qárejetler", value: "" },
			{ name: "Jámi", value: "" },
		],
	},
	{
		section: "Bir aylıq ortasha dáramat",
		key: [
			{ name: "1 ónim", value: "" },
			{ name: "Aylıq dáramat", value: "" },
			{ name: "Sap payda", value: "" },
			{ name: "Rentabellik", value: "" },
			{ name: "Ózin-ózi aqlaw múddeti", value: "" },
		],
	},
]

export const DEFAULT_DESCRIPTION_UZ = [
	{
		section: "Texnologiya jarayoni",
		key: [
			{ name: "Uskuna", value: "" },
			{ name: "Quvvati", value: "" },
			{ name: "Elektr sarfi", value: "" },
			{ name: "Ishchilar soni", value: "" },
		],
	},
	{
		section: "Bir oylik o'rtacha xarajat",
		key: [
			{ name: "Xomashyo material", value: "" },
			{ name: "Elektr energiyasi", value: "" },
			{ name: "Ish haqi", value: "" },
			{ name: "Boshqa xarajatlar", value: "" },
			{ name: "Jami", value: "" },
		],
	},
	{
		section: "Bir oylik o'rtacha daromad",
		key: [
			{ name: "1 ta mahsulot", value: "" },
			{ name: "Oylik daromad", value: "" },
			{ name: "Sof foyda", value: "" },
			{ name: "Rentabellik", value: "" },
			{ name: "O'zini qoplash muddati", value: "" },
		],
	},
]

export const useHardwareImportForm = () => {
	const [form] = Form.useForm<IHardwareImportForm>()
	const queryClient = useQueryClient()
	const { message } = useMessage()
	const navigate = useNavigate()
	const { id } = useParams({ strict: false }) as { id?: string }
	const [deletedImages, setDeletedImages] = useState<string[]>([])

	const { data: project, isLoading: isFetching } = useGetByIdHardwareImport(
		id || "",
	)

	const createMutation = useMutation({
		mutationFn: HardwareImportService.create,
		onSuccess: () => {
			message.success("Инвестиционный проект создан")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["hardware-import"] })
			navigate({ to: "/hardware-import" })
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	const updateMutation = useMutation({
		mutationFn: HardwareImportService.update,
		onSuccess: () => {
			message.success("Инвестиционный проект обновлён")
			form.resetFields()
			queryClient.invalidateQueries({ queryKey: ["hardware-import"] })
			navigate({ to: "/hardware-import" })
		},
		onError: (error: ResponseError) => {
			message.error(errorCatch(error))
		},
	})

	useEffect(() => {
		if (id && project?.data) {
			const record = project.data
			form.setFieldsValue({
				name_kaa: record.name.kaa,
				name_uz: record.name.uz,
				description_kaa: record.description.kaa,
				description_uz: record.description.uz,
				price: record.price,
				files: record.images.map((url, index) => ({
					uid: String(index),
					name: url.split("/").pop() || `image-${index}`,
					status: "done",
					url,
				})),
			})
			setDeletedImages([])
		} else if (!id) {
			form.setFieldsValue({
				description_kaa: DEFAULT_DESCRIPTION_KAA,
				description_uz: DEFAULT_DESCRIPTION_UZ,
				files: [],
			})
		}
	}, [form, id, project])

	const onFinish = (values: IHardwareImportForm) => {
		const formData = new FormData()

		formData.append("name_kaa", values.name_kaa)
		formData.append("name_uz", values.name_uz)
		formData.append("description_kaa", JSON.stringify(values.description_kaa))
		formData.append("description_uz", JSON.stringify(values.description_uz))
		formData.append("price", values.price)

		if (values.files) {
			values.files.forEach((file: any) => {
				if (file.originFileObj) {
					formData.append("files", file.originFileObj)
				}
			})
		}

		if (deletedImages.length > 0) {
			formData.append("deleting_images", JSON.stringify(deletedImages))
		}

		if (id) {
			updateMutation.mutate({ id: id, form: formData })
		} else {
			createMutation.mutate(formData)
		}
	}

	return {
		form,
		onFinish,
		setDeletedImages,
		isLoading:
			updateMutation.isPending || createMutation.isPending || isFetching,
		id,
	}
}
