import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from "./Form";
import Select from "./Select";
import Icon from "../Icon/Icon";

storiesOf('Form', module)
    .add('Input Small', () => <Input
        label="Email"
        placeholder="Email"
        size="small"
    />)
    .add('Input Medium', () => <Input
        label="Email"
        placeholder="Email"
        size="medium"
    />)
    .add('Input Large', () => <Input
        label="Email"
        placeholder="Email"
        size="large"
    />)
    .add('Select', () =>
    <Select
    size="large"
    ></Select>)
