import React, { useState } from "react";
import TextInput from "../components/TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};
