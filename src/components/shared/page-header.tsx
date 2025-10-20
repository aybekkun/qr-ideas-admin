import { Flex, Space, Typography } from "antd"
import { type PropsWithChildren } from "react"

const { Title } = Typography

type PageHeaderProps = {
	title: string
} & PropsWithChildren

export const PageHeader = ({ title, children }: PageHeaderProps) => {
	return (
		<Flex align="center" justify="space-between" style={{ marginBottom: 24 }}>
			<Title level={3} style={{ margin: 0 }}>
				{title}
			</Title>

			{children && (
				<Space size="middle" align="center">
					{children}
				</Space>
			)}
		</Flex>
	)
}
