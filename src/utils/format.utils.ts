export const formatPhone = (phone?: string) => {
	if (!phone) return "-"

	// Удаляем все лишние символы (пробелы, тире, скобки)
	const digits = phone.replace(/\D/g, "")

	// Если номер начинается без +998 — добавляем
	let normalized = digits
	if (digits.startsWith("998") === false) {
		normalized = "998" + digits
	}

	// Форматируем
	return normalized.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "+$1 $2 $3 $4 $5")
}

export const formatPhoneReverse = (phone?: string) => {
	if (phone === undefined) return "-"
	if (phone.startsWith("+998")) {
		return phone.replace(/ /g, "")
	}
	return "+998" + phone.replace(/ /g, "")
}

export const formatPhoneForm = (phone?: string) => {
	return phone ? phone.replace("+998", "") : ""
}

export const formatPrice = (price?: string | number | null) => {
	if (price === null || price === undefined) return "-"
	const num = typeof price === "string" ? parseFloat(price) : price
	if (isNaN(num)) return "-"
	return `${num.toLocaleString("ru-RU")}`
}

export const formatInputPrice = <T>(value: T) =>
	`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")

export const formatTgUrl = (url: string): string | null => {
	try {
		const match = url.match(/t\.me\/([^/]+)/)
		return match ? match[1] : null
	} catch {
		return null
	}
}
