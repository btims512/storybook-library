import React from "react";
import NavBar from "../components/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {
    links: { control: "array" },
  },
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { href: "#", label: "Tab 1" },
    { href: "#", label: "Tab 2" },
    { href: "#", label: "Tab 3" },
    { href: "#", label: "Tab 4" },
  ],
};
