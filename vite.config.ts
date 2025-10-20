import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@api": path.resolve(__dirname, "src/api"),
			"@components": path.resolve(__dirname, "src/components"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@layouts": path.resolve(__dirname, "src/layouts"),
			"@services": path.resolve(__dirname, "src/services"),
			"@providers": path.resolve(__dirname, "src/providers"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
})
