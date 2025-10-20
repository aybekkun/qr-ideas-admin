import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// Import the generated route tree
import { Providers } from "./providers"
import '@ant-design/v5-patch-for-react-19';
// Create a new router instance

// Register the router instance for type safety

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			<Providers />
		</StrictMode>
	)
}
