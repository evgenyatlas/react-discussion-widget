import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from "./Input"

export default {
    title: 'UIkit/Input',
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    placeholder: "Введите текст",
    disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
    ...Default.args,
    disabled: true
}