import { formatInputPrice } from "@/utils"
import { ConfigProvider, InputNumber, type InputNumberProps } from "antd"
import { forwardRef } from "react"


const InputPrice = forwardRef<HTMLInputElement, InputNumberProps>(
	({ style, ...rest }, ref) => {
		return (
			<ConfigProvider>
				<InputNumber
					ref={ref}
					formatter={formatInputPrice}
					min={0}
					style={{ width: "100%", ...style }}
					{...rest}
				/>
			</ConfigProvider>
		)
	}
)
InputPrice.displayName = "InputPrice"

export { InputPrice }

