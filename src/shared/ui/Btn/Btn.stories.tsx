import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Btn } from "./Btn"

export default {
    title: 'UIkit/Btn',
    component: Btn,
} as ComponentMeta<typeof Btn>

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />

export const Default = Template.bind({})

Default.args = {
    children: "Отправить",
}