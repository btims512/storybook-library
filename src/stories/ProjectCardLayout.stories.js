import React from "react";
import ProjectCardLayout from "../components/ProjectCardLayout";
import SbIcon from "./Assets/project-logo-storybook@2x.png";

export default {
  title: "Layouts/ProjectCardLayout",
  component: ProjectCardLayout,
};

const Template = (args) => <ProjectCardLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Projects",
  projects: [
    {
      title: "Project Title 1",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: SbIcon,
    },
    {
      title: "Project Title 2",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: SbIcon,
    },
    {
      title: "Project Title 3",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: SbIcon,
    },
    {
      title: "Project Title 4",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: SbIcon,
    },
    {
      title: "Project Title 5",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: SbIcon,
    },
    {
      title: "Project Title 6",
      description: "Description",
      tech: "React, CSS, Storybook",
      codeLink: "https://github.com",
      visitLink: "https://example.com",
      icon: SbIcon,
    },
  ],
};
