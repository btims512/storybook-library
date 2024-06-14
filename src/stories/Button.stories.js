import React from "react";
import Button, { OutlinedButton, DisabledButton } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: {
          primary: "btn--primary",
          secondary: "btn--secondary",
        },
      },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
    outlineColor: {
      control: {
        type: "color",
      },
    },
    className: { table: { disable: true } },
    styleName: { table: { disable: true } },
    style: { table: { disable: true } },
  },
};

const Template = (args) => {
  const { backgroundColor, ...rest } = args;
  const mergedStyle = { backgroundColor, ...rest.style };
  return <Button {...rest} style={mergedStyle} />;
};

const SecondaryTemplate = (args) => {
  const { outlineColor, ...rest } = args;
  const mergedStyle = { outlineColor, ...rest.style };
  return <OutlinedButton {...rest} style={mergedStyle} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "btn--primary",
};

Primary.argTypes = {
  outlineColor: { table: { disable: true } },
};

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  label: "Button",
  variant: "btn--outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  variant: "btn--disabled",
};
