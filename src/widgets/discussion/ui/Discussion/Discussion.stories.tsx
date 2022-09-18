import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Discussion } from "./Discussion"

export default {
    title: 'Widgets/Discussion',
    component: Discussion,
} as ComponentMeta<typeof Discussion>

const Template: ComponentStory<typeof Discussion> = (args) => <Discussion {...args} />

export const Default = Template.bind({})

Default.args = {
}