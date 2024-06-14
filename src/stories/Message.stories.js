// src/stories/Message.stories.jsx
import React from "react";
import Message from "../components/Message";

export default {
  title: "Components/Message",
  component: Message,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "danger", "warning", "info"],
      },
    },
    content: { control: "text" },
  },
};

const Template = (args) => <Message {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  content: "This is a success message.",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  content: "O código que você digitou é inválido. Tente novamente.",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  content: "This is a warning message.",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  content: "This is an info message.",
};
