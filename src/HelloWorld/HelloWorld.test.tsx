import React from 'react'
import { render } from '@testing-library/react'

import HelloWorld, { HelloWorldProps } from './HelloWorld'

describe('<HelloWorld />', () => {
  let props: HelloWorldProps

  beforeEach(() => {
    props = {
      name: 'World',
    }
  })

  const renderComponent = () => render(<HelloWorld {...props} />)

  it('Should say hello to the World!', () => {
    const { getByTestId } = renderComponent()

    const HelloWorld = getByTestId('hello-message')

    expect(HelloWorld).toHaveTextContent('Hello World!')
  })

  it('Should say hello to Arsam', () => {
    props.name = 'Arsam'
    const { getByTestId } = renderComponent()

    const HelloWorld = getByTestId('hello-message')

    expect(HelloWorld).toHaveTextContent('Hello Arsam!')
  })
})
