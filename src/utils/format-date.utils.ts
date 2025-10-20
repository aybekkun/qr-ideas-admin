import dayjs from "dayjs"

export const formatDate = (date: string | number | Date): string => {
	return dayjs(date).format("DD.MM.YYYY HH:mm")
}

// Возвращает сегодняшний год (например: 2025)
export const getCurrentYear = () => {
	return dayjs().year()
}

// Возвращает сегодняшний месяц (1–12)
export const getCurrentMonth = () => {
	return dayjs().month() + 1 // dayjs.month() возвращает 0–11, поэтому +1
}

// Возвращает сегодняшний день месяца (1–31)
export const getCurrentDay = () => {
	return dayjs().date()
}