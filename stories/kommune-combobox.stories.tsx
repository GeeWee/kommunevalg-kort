import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KommuneCombobox } from '../components/kommune-combobox';

export default {
  title: 'KommuneCombobox',
  component: KommuneCombobox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof KommuneCombobox>;

const Template: ComponentStory<typeof KommuneCombobox> = (args) => <KommuneCombobox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // insert props here
};
