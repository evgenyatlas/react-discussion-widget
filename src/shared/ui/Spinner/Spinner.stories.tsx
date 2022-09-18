import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from "./Spinner"

export default {
    title: 'UIkit/Spinner',
    component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})

Default.args = {
}