import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KommuneEventList } from '../components/kommune-event-list';
import {DateTime} from "luxon";
import {KommuneEvent} from "../types";

export default {
  title: 'KommuneEventList',
  component: KommuneEventList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof KommuneEventList>;

const eventProps: KommuneEvent[] = [
  {
    name: 'Stor demo 1 (old)',
    time: "12:30",
    kommune: 'Aalborg',
    place: "Online",
    description: 'blabla',
    moreInfoLink: 'www.google.com',
    date: DateTime.now().minus({days: 2})
  },
  {
    name: 'Stor demo 2 (old)',
    kommune: 'Aalborg',
    time: "12:30",
    place: "Online",
    description: 'blabla',
    moreInfoLink: 'www.google.com',
    date: DateTime.now().minus({days: 1})
  },
  {
    name: 'Stor demo 4 (new)',
    kommune: 'Aalborg',
    time: "12:30",
    place: "Online",
    description: 'blabla',
    moreInfoLink: 'www.google.com',
    date: DateTime.now().plus({days: 8})
  },
  {
    name: 'Stor demo 3 (new)',
    kommune: 'Aalborg',
    time: "12:30",
    place: "Online",
    description: 'blabla',
    moreInfoLink: 'www.google.com',
    date: DateTime.now().plus({days: 3})
  },
]

const Template: ComponentStory<typeof KommuneEventList> = (args) => <KommuneEventList { ...args} events={eventProps} />;

export const Primary = Template.bind({});
Primary.args = {
  // insert props here
};
