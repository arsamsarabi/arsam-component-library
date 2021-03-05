import React, { FC, ChangeEvent } from 'react'

import { ToggleWrapper, Label, Input, Indicator } from './Toggle.styles'
import type { ThemeModes } from '../types'

export type ToggleProps = {
  value: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name?: string
  color?: ThemeModes
  disabled?: boolean
}

const Toggle: FC<ToggleProps> = ({
  onChange,
  value,
  name = 'acl-toggle',
  color = 'primary',
  disabled = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) onChange(e)
  }

  return (
    <ToggleWrapper>
      <Input
        type="checkbox"
        checked={value}
        onChange={handleChange}
        id={name}
        name={name}
        data-testid="acl-input"
      />
      <Label
        htmlFor={name}
        data-testid="acl-label"
        checked={value}
        color={color}
        disabled={disabled}
      >
        <Indicator />
      </Label>
    </ToggleWrapper>
  )
}

export default Toggle
