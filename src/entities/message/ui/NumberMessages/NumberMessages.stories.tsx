import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NumberMessages } from "./NumberMessages";

export default {
    title: 'Example/NumberMessages',
    component: NumberMessages,
} as ComponentMeta<typeof NumberMessages>

const Template: ComponentStory<typeof NumberMessages> = (args) => <NumberMessages {...args} />

export const Default = Template.bind({})