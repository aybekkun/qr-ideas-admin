import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationKR from "../locales/kr.json"
import translationUZ from "../locales/uz.json"
i18n // Поддержка загрузки переводов (можно убрать, если локальные)
	.use(initReactI18next)
	.init({
		fallbackLng: "kaa",
		// Язык по умолчанию
		debug: true,
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
		},
		resources: {
			kaa: {
				translation: translationKR,
			},
			uz: {
				translation: translationUZ,
			},
		},
		interpolation: {
			escapeValue: false, // React уже экранирует HTML
		},
	})

export default i18n
