import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card, Col, Form, Input, Row } from "antd"

interface Props {
	name: string | (string | number)[]
	label: string
}

export const HardwareImportDescriptionField = ({ name, label }: Props) => {
	return (
		<Card title={label} size="small" style={{ marginBottom: 16 }}>
			<Form.List name={name}>
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name: sectionName, ...restField }) => (
							<Card
								key={key}
								type="inner"
								title={`Секция ${sectionName + 1}`}
								extra={
									<MinusCircleOutlined onClick={() => remove(sectionName)} />
								}
								style={{ marginBottom: 16 }}
							>
								<Form.Item
									{...restField}
									name={[sectionName, "section"]}
									label="Название секции"
									rules={[{ required: true, message: "Введите название секции" }]}
								>
									<Input placeholder="Технология жараёни" />
								</Form.Item>

								<Form.List name={[sectionName, "key"]}>
									{(keyFields, { add: addKey, remove: removeKey }) => (
										<>
											{keyFields.map(
												({
													key: subKey,
													name: keyName,
													...restSubField
												}) => (
													<Row
														key={subKey}
														gutter={8}
														align="bottom"
														style={{ marginBottom: 8 }}
													>
														<Col span={11}>
															<Form.Item
																{...restSubField}
																name={[keyName, "name"]}
																label="Параметр"
																rules={[
																	{ required: true, message: "Введите имя" },
																]}
															>
																<Input placeholder="Название" />
															</Form.Item>
														</Col>
														<Col span={11}>
															<Form.Item
																{...restSubField}
																name={[keyName, "value"]}
																label="Значение"
																rules={[
																	{
																		required: true,
																		message: "Введите значение",
																	},
																]}
															>
																<Input placeholder="Значение" />
															</Form.Item>
														</Col>
														<Col span={2}>
															<Button
																type="text"
																danger
																icon={<MinusCircleOutlined />}
																onClick={() => removeKey(keyName)}
																style={{ marginBottom: 24 }}
															/>
														</Col>
													</Row>
												)
											)}
											<Form.Item>
												<Button
													type="dashed"
													onClick={() => addKey()}
													block
													icon={<PlusOutlined />}
												>
													Добавить параметр
												</Button>
											</Form.Item>
										</>
									)}
								</Form.List>
							</Card>
						))}
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Добавить секцию
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
		</Card>
	)
}
