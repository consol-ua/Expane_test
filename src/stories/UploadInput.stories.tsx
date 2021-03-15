import { PropsWithChildren } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { UploadInput, UploadInputProps } from '../ui/UploadInput'

export default {
  title: 'Components/UploadInput',
  component: UploadInput,
} as Meta

const Template: Story<PropsWithChildren<UploadInputProps>> = args => <UploadInput {...args} />

export const Normal = Template.bind({})
Normal.args = {}
