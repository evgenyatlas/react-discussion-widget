import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from "./Message";

export default {
    title: 'Example/Message',
    component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Default = Template.bind({});

Default.args = {
    text: 'text',
    userName: 'username',
    date: new Date().getTime()
};