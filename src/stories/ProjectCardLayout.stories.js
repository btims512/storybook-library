import React from "react";
import ProjectCardLayout from "../components/ProjectCardLayout";
import AppleIcon from "./Assets/project-logo-apple@2x.png";

export default {
  title: "Layouts/ProjectCardLayout",
  component: ProjectCardLayout,
};

const Template = (args) => <ProjectCardLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  projects: [
    {
      title: "Project Title 1",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: AppleIcon,
    },
    {
      title: "Project Title 2",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: AppleIcon,
    },
    {
      title: "Project Title 3",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: AppleIcon,
    },
    {
      title: "Project Title 4",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: AppleIcon,
    },
    {
      title: "Project Title 5",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: AppleIcon,
    },
    {
      title: "Project Title 6",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: AppleIcon,
    },
  ],
};
