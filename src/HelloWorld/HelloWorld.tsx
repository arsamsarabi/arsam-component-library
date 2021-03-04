import React, { FC } from 'react'
import { Text } from './HelloWorld.styles'

export type HelloWorldProps = {
  name?: string
}

const HelloWorld: FC<HelloWorldProps> = ({ name = 'Arsam' }) => (
  <Text data-testid="hello-message">Hello {name}!</Text>
)

export default HelloWorld
