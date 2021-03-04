import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Toggle, { ToggleProps } from './Toggle'
import { defaultTheme } from '../theme'

describe('<Toggle />', () => {
  let props: ToggleProps

  beforeEach(() => {
    props = {
      name: 'test-toggle',
      onChange: jest.fn(),
      value: false,
      color: 'primary',
    }
  })

  const renderComponent = () => render(<Toggle {...props} />)

  it('Should render with unchecked styles', () => {
    const { getByTestId } = renderComponent()
    const LabelComponent = getByTestId('acl-label')

    expect(LabelComponent).toHaveStyleRule(
      'background-color',
      defaultTheme.palette.grey[300],
    )
  })

  it('Should render with checked styles', () => {
    props.value = true
    const { getByTestId } = renderComponent()
    const LabelComponent = getByTestId('acl-label')

    expect(LabelComponent).toHaveStyleRule(
      'background-color',
      defaultTheme.palette.primary,
    )
  })

  it('Should render with default props', () => {
    delete props.name
    delete props.color

    const { getByTestId } = renderComponent()
    const InputComponent = getByTestId('acl-input')
    const LabelComponent = getByTestId('acl-label')

    expect(InputComponent).toHaveAttribute('id', 'acl-toggle')
    expect(InputComponent).toHaveAttribute('name', 'acl-toggle')
    expect(LabelComponent).toHaveAttribute('color', 'primary')
  })
})
