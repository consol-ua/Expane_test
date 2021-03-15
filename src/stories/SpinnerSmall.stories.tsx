import { PropsWithChildren } from 'react'
import { Story, Meta } from '@storybook/react'
import { SpinnerSmall, SpinnerSmallProps } from '../ui/SpinnerSmall'

export default {
  title: 'Components/SpinnerSmall',
  component: SpinnerSmall,
} as Meta

const Template: Story<PropsWithChildren<SpinnerSmallProps>> = args => <SpinnerSmall {...args} />

export const Normal = Template.bind({})
Normal.args = {}
