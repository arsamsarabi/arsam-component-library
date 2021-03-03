import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import HelloWorld, { HelloWorldProps } from './HelloWorld'

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
} as Meta

const Template: Story<HelloWorldProps> = (args) => <HelloWorld {...args} />

export const World = Template.bind({})
World.args = {
  name: 'World',
}

export const Arsam = Template.bind({})
Arsam.args = {}
