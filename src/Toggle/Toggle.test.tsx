import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
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
      disabled: false,
    }
  })

  afterEach(cleanup)

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
    delete props.disabled

    const { getByTestId } = renderComponent()
    const InputComponent = getByTestId('acl-input')
    const LabelComponent = getByTestId('acl-label')

    expect(InputComponent).toHaveAttribute('id', 'acl-toggle')
    expect(InputComponent).toHaveAttribute('name', 'acl-toggle')
    expect(LabelComponent).toHaveAttribute('color', 'primary')
  })

  it('Should render with didabled styles', () => {
    props.disabled = true

    const { getByTestId } = renderComponent()
    const LabelComponent = getByTestId('acl-label')

    expect(LabelComponent).toHaveStyleRule(
      'background-color',
      defaultTheme.palette.grey[200],
    )
  })

  it('Should not fire onChange if disabled', () => {
    props.disabled = true

    const { getByTestId } = renderComponent()
    const LabelComponent = getByTestId('acl-label')

    fireEvent.click(LabelComponent)

    expect(props.onChange).toHaveBeenCalledTimes(0)
  })

  it('Should fire onChange if not disabled', () => {
    const { getByTestId } = renderComponent()
    const LabelComponent = getByTestId('acl-label')

    fireEvent.click(LabelComponent)

    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
