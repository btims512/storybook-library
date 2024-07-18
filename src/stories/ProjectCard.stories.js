import React from "react";
import NdaProjectCard from "../components/NdaProjectCard";
import ProjectCard from "../components/ProjectCard";
import AppleIcon from "./assets/project-logo-storybook@2x.png";

export default {
  title: "Components/ProjectCards",
  component: NdaProjectCard,
};

const NdaTemplate = (args) => <NdaProjectCard {...args} />;
const ProjectTemplate = (args) => <ProjectCard {...args} />;

export const ProjectCardStory = ProjectTemplate.bind({});
ProjectCardStory.args = {
  project: {
    title: "Project Title",
    description: "Description",
    tech: "React, CSS, Storybook",
    codeLink: "https://github.com",
    visitLink: "https://example.com",
    icon: AppleIcon,
  },
};

export const NdaProjectCardStory = NdaTemplate.bind({});
NdaProjectCardStory.args = {
  title: "NDA Project Title",
  description: "NDA Description",
  tech: "React, CSS, Storybook",
  icon: AppleIcon,
};
