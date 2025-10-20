import { create } from "zustand"
export type ParamsForm = Record<string, unknown>

type FormModalState = {
	params: ParamsForm | null
	isForm: boolean
	toggleForm: () => void
	setParams: (params: ParamsForm) => void
	resetParams: () => void
}

export const useFormModalStore = create<FormModalState>((set) => ({
	params: null,
	isForm: false,
	toggleForm: () => set((state) => ({ isForm: !state.isForm })),
	setParams: (params) => set({ params, isForm: true }),
	resetParams: () => set({ params: null, isForm: false }),
}))

export const isParamsFormValidate = <T extends ParamsForm>(
	params: ParamsForm | null
): params is T => {
	if (params === null) return false
	const requiredKeys: (keyof T)[] = Array<keyof T>()
	return requiredKeys.every((key) => key in params)
}
