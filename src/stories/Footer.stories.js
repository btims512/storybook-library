import React from "react";
import Footer from "../components/Footer";

export default {
  title: "Layouts/Footer",
  component: Footer,
  parameters: {
    storySort: {
      order: 200,
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
