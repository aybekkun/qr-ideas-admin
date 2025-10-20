import s from "./auth.module.css"
import { LoginForm } from "./ui"

export const AuthPage = () => {
	return (
		<div className={s.root}>
			<LoginForm />
		</div>
	)
}
