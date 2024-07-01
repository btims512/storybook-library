import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation"; // Adjust the path to where your component is actually located

// This is the default export that defines the metadata for the component
export default {
  title: "Components/BackgroundAnimation",
  component: BackgroundAnimation,
  // Here you can include more parameters for Storybook such as decorators or argTypes
};

// Template for stories
const Template = (args) => <BackgroundAnimation {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  // Props you want to pass to the component by default, if any
};

// Example of another story variation, if needed
// export const Customized = Template.bind({});
// Customized.args = {
//   // Custom props for this story variation
// };
