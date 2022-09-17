import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from "./Counter";

export default {
    title: 'Example/Counter',
    component: Counter,
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />

export const Default = Template.bind({})

Default.args = {
    titles: ['Комментарий', 'Комментария', 'Комментариев'],
    value: 10
}