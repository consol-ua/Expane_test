import { PropsWithChildren } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Spinner, SpinnerProps } from '../ui/Spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta

const Template: Story<PropsWithChildren<SpinnerProps>> = args => <Spinner {...args} />

export const Normal = Template.bind({})
Normal.args = {}
