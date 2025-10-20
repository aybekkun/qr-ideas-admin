export function getFileTypeWithEmoji(text: string): string {
	const match = text.match(/\.(\w+)$/)
	const ext = match ? match[1].toLowerCase() : "unknown"

	let emoji = "📄" // по умолчанию документ

	if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) {
		emoji = "🖼️"
	} else if (["mp4", "mov", "avi", "mkv"].includes(ext)) {
		emoji = "🎬"
	} else if (["mp3", "wav", "ogg"].includes(ext)) {
		emoji = "🎵"
	} else if (["pdf"].includes(ext)) {
		emoji = "📕"
	} else if (["zip", "rar", "7z"].includes(ext)) {
		emoji = "🗜️"
	}

	return `${emoji} .${ext}`
}
