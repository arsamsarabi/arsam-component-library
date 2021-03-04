import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'

import type { WithTheme } from '../types'
import Toggle, { ToggleProps } from './Toggle'

export default {
  title: 'Example/Toggle',
  component: Toggle,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'success', 'danger'],
      },
    },
    value: {
      control: {
        type: null,
      },
    },
    onChange: {
      control: {
        type: null,
      },
    },
  },
} as Meta

const Template: Story<ToggleProps & WithTheme> = ({
  name,
  color,
  theme = {},
}) => {
  const [val, setVal] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Toggle
        name={name}
        color={color}
        value={val}
        onChange={(e) => setVal(e.target.checked)}
      />
    </ThemeProvider>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  color: 'primary',
}

export const CustomTheme = Template.bind({})
CustomTheme.args = {
  name: 'custom-toggle',
  theme: {
    palette: {
      primary: '#A3CB38',
    },
  },
}
