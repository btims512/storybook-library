import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    buttonLabel: { control: "text" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onButtonClick={args.buttonLabel ? () => {} : null}
      buttonVariant="btn--filled"
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
  value: "",
};

export const WithButton = Template.bind({});
WithButton.args = {
  placeholder: "Search...",
  value: "",
  buttonLabel: "Search",
  buttonVariant: "btn--filled",
};
