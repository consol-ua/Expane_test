import { PropsWithChildren } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../ui/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<PropsWithChildren<ButtonProps>> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Button',
}

export const Outline = Template.bind({})
Outline.args = {
  type: 'outline',
  children: 'Button',
}
