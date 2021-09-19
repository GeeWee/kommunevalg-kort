import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {KommuneGroupList} from '../components/kommune-group-list';

export default {
    title: 'KommuneGroupList',
    component: KommuneGroupList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof KommuneGroupList>;

const Template: ComponentStory<typeof KommuneGroupList> = (args) => <KommuneGroupList {...args} />;

export const EmptyState = Template.bind({});
EmptyState.args = {
    groups: []
};

export const Primary = Template.bind({});
Primary.args = {
    groups: [{
        description: "description",
        groupName: "groupName",
        kommune: "Aalborg",
        location: "location",
        meetings: "meetings",
        person: "person"
    }]
};
