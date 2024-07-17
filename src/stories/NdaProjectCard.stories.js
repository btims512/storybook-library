import React from "react";
import NdaProjectCard from "../components/NdaProjectCard";
import AppleIcon from "./assets/project-logo-storybook@2x.png";

export default {
  title: "Components/NdaProjectCard",
  component: NdaProjectCard,
};

const Template = (args) => <NdaProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "NDA Project Title",
  description: "NDA Description",
  tech: "React, CSS, Storybook",
  icon: AppleIcon,
};
