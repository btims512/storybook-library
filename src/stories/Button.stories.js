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
  },
};

const Template = (args) => {
  const { backgroundColor, ...rest } = args;
  const mergedStyle = { backgroundColor, ...rest.style };
  return <Button {...rest} style={mergedStyle} />;
};

const OutlinedTemplate = (args) => {
  const { outlineColor, ...rest } = args;
  const mergedStyle = { outlineColor, ...rest.style };
  return <OutlinedButton {...rest} style={mergedStyle} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "btn--primary",
};

export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {
  label: "Button",
  variant: "btn--outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  variant: "btn--disabled",
};
