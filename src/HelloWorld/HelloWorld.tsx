import React, { FC } from 'react'

import './HelloWorld.css'

export type HelloWorldProps = {
  name?: string
}

const HelloWorld: FC<HelloWorldProps> = ({ name = 'Arsam' }) => (
  <h1 className="text" data-testid="hello-message">
    Hello {name}!
  </h1>
)

export default HelloWorld
