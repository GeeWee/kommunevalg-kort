import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KommuneEventList } from '../components/kommune-event-list';

export default {
  title: 'KommuneEventList',
  component: KommuneEventList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof KommuneEventList>;

const Template: ComponentStory<typeof KommuneEventList> = (args) => <KommuneEventList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // insert props here
};
