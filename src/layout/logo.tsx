import { Link } from "@tanstack/react-router"
import LogoSvg from "./logo.svg"
import logoSvgWhite from "./logo-white.svg"
import { useThemeStore } from "@/store/use-theme-store"
import { THEME_MODE } from "@/constants"
export const Logo = () => {
	const { theme: mode } = useThemeStore()
	const logo = mode === THEME_MODE.LIGHT ? LogoSvg : logoSvgWhite
	return (
		<Link
			to="/"
			style={{
				paddingBlock: "15px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%", //
			}}
		>
			<img
				src={logo}
				style={{
					width: "100%", // логотип адаптируется под контейнер
					maxWidth: "180px", // ограничение, чтобы не был слишком большим
					height: "auto",
					maxHeight: "36px", // сохраняет пропорции
					objectFit: "contain",
				}}
				alt="Master Print"
			/>
		</Link>
	)
}
