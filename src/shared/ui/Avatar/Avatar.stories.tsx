import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from "./Avatar"

export default {
    title: 'UIkit/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
    name: "Eugene",
}