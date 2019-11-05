import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from "./Form";
import Select from "./Select";
import Icon from "../Icon/Icon";
import Checkbox from "./Checkbox";
import NumberInput from "./NumberInput";
import InputWithButton from "./InputWithButton";

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
        text="select"
        ></Select>
    )
    .add('Checkbox Black Uncheck', () =>
        <Checkbox
          checked={false}
          color="black"
          />
    )
    .add('Checkbox Black Checked', () =>
        <Checkbox
          checked={true}
          color="black" />
    )
    .add('Checkbox Blue Unchecked', () =>
        <Checkbox
          checked={false}
          color="blue"/>
    )
    .add('Checkbox Blue Checked', () =>
        <Checkbox
          checked={true}
          color="blue"/>
    )
    .add('Number Input', () =>
        <NumberInput
          step={2}
          min={0}
          max={100}
          value={0}/>
    )
    .add('Input With Button', () =>
        <InputWithButton
          placeholder="Voucher code"
          size="large"
          buttonText="Redeem"
          />
    )
