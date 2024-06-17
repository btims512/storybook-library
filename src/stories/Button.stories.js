import React from "react";
import Button, { OutlinedButton } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: {
          primary: "btn--filled",
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

export const Filled = Template.bind({});
Filled.args = {
  label: "Button",
  variant: "btn--filled",
};

Filled.argTypes = {
  outlineColor: { table: { disable: true } },
};

export const Outline = SecondaryTemplate.bind({});
Outline.args = {
  label: "Button",
  variant: "btn--outlined",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Button",
  variant: "btn--ghost",
};
