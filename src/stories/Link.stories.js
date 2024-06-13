// src/stories/Link.stories.jsx
import React from "react";
import Link from "../components/Link";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  children: "Link",
  newWindow: false,
  className: "storybook-link",
  className: "label-1",
};
