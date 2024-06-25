// src/stories/ProjectCard.stories.js
import React from "react";
import ProjectCard from "../components/ProjectCard";
import AppleIcon from "./Assets/project-logo-apple@2x.png";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: {
    count: {
      control: {
        type: "number",
        min: 1,
      },
      defaultValue: 6,
    },
  },
};

const Template = (args) => {
  const { count, ...rest } = args;
  return (
    <div className="card-container">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectCard key={index} {...rest} />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Project Title",
  description: "Description",
  tech: "React, CSS, Storybook",
  codeLink: "https://github.com",
  visitLink: "https://example.com",
  icon: AppleIcon,
  count: 6,
};

export const AnotherExample = Template.bind({});
AnotherExample.args = {
  title: "Another Project",
  description: "This is another brief description of a different project.",
  tech: "JavaScript, HTML, Webpack",
  codeLink: "https://github.com",
  visitLink: "https://example.com",
  icon: AppleIcon,
  count: 6,
};
