import React from "react";
import Button from "../components/Button";
// import * as DocBlock from "@storybook/blocks";

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
  },
};

const Template = (args) => {
  const { backgroundColor, ...rest } = args;
  const mergedStyle = { backgroundColor, ...rest.style };
  return <Button {...rest} style={mergedStyle} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "btn--primary",
};
