import React from "react";
import Dropdown from "../components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    options: { control: "array" },
    defaultLabel: { control: "text" },
    count: { control: "number" },
  },
};

const Template = (args) => {
  const { count, options, defaultLabel } = args;
  const dropdowns = Array.from({ length: count }, (_, i) => (
    <Dropdown key={i} options={options} defaultLabel={defaultLabel} />
  ));

  return <div className="dropdown-container">{dropdowns}</div>;
};

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  defaultLabel: "Select an option",
  count: 1,
};
