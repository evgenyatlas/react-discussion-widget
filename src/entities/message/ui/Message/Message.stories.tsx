import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Message } from "./Message"

export default {
    title: 'Entities/Message',
    component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Default = Template.bind({})

Default.args = {
    id: 0,
    text: 'text',
    userName: 'username',
    date: new Date().getTime(),
    like: 0,
    dislike: 0,
}