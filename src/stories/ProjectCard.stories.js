import React from "react";
import ProjectCard from "../components/ProjectCard";
import AppleIcon from "./assets/project-logo-storybook@2x.png";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: {
    title: "Project Title",
    description: "Description",
    tech: "React, CSS, Storybook",
    codeLink: "https://github.com",
    visitLink: "https://example.com",
    icon: AppleIcon,
  },
};

// Additional story to test dark mode
export const DarkMode = Template.bind({});
DarkMode.args = {
  project: {
    title: "Dark Mode Project",
    description: "Dark Mode Description",
    tech: "React, CSS, Storybook",
    codeLink: "https://github.com/darkmode",
    visitLink: "https://example-darkmode.com",
    icon: AppleIcon,
  },
};
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
