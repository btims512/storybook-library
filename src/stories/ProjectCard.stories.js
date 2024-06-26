import React from "react";
import ProjectCard from "../components/ProjectCard";
import AppleIcon from "./Assets/project-logo-storybook@2x.png";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Project Title",
  description: "Description",
  tech: "React, CSS, Storybook",
  codeLink: "https://github.com",
  visitLink: "https://example.com",
  icon: AppleIcon,
};
