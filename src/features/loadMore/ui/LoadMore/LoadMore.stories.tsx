import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadMore } from "./LoadMore"

export default {
    title: 'Features/LoadMore',
    component: LoadMore,
} as ComponentMeta<typeof LoadMore>

const Template: ComponentStory<typeof LoadMore> = (args) => <LoadMore {...args} />

export const Default = Template.bind({})

Default.args = {
}