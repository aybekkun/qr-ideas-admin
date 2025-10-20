import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import { TanstackQueryProvier } from "./tanstack-query"
import { TanstackRouterProvider } from "./tanstack-router"
import { AntdProvider } from "./antd-provider"

export const Providers = () => {
	return (
		<I18nextProvider i18n={i18n}>
			<TanstackQueryProvier>
				<AntdProvider>
					<TanstackRouterProvider />
				</AntdProvider>
			</TanstackQueryProvier>
		</I18nextProvider>
	)
}
