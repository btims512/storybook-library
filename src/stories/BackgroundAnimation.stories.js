import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation"; // Adjust the path to where your component is actually located

export default {
  title: "Components/BackgroundAnimation",
  component: BackgroundAnimation,
};

const Template = (args) => <BackgroundAnimation {...args} />;

export const Default = Template.bind({});
Default.args = {};
