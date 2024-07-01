import React from "react";
import PageLayout from "../components/PageLayout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCardLayout from "../components/ProjectCardLayout";
import About from "../components/About";
import TechPageLayout from "../components/TechPageLayout";
import SbIcon from "./Assets/project-logo-storybook@2x.png";
import exampleIcon from "./Assets/image-ben-2@3x.png";
import imageBen from "./Assets/image-ben-1@3x.png";
import Button from "../components/Button";
import { ReactComponent as FrontEndIcon } from "./Assets/react-2.svg";
import { ReactComponent as BackEndIcon } from "./Assets/icon-data.svg";
import { ReactComponent as FrameworkIcon } from "./Assets/icon-js.svg";

export default {
  title: "Layouts/PageLayout",
  component: PageLayout,
};

const Template = (args) => <PageLayout {...args} />;

export const Main = Template.bind({});
Main.args = {
  navbar: (
    <NavBar
      links={[
        { href: "#", label: "Tab 1" },
        { href: "#", label: "Tab 2" },
        { href: "#", label: "Tab 3" },
        { href: "#", label: "Tab 4" },
      ]}
    />
  ),
  footer: <Footer />,
  hero: (
    <Hero
      header="Benjamin"
      subtitle="Frontend Software Engineer"
      picture={imageBen}
      button={<Button label="View Resume" onClick={() => {}} />}
    />
  ),
  projects: (
    <ProjectCardLayout
      projects={[
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
      ]}
    />
  ),
  technologies: (
    <TechPageLayout
      title="Technologies"
      iconCards={[
        {
          icon: <FrontEndIcon className="icon-card-icon" />,
          title: "Frontend Development",
          description: "React, Vue, Angular",
        },
        {
          icon: <BackEndIcon className="icon-card-icon" />,
          title: "Backend Development",
          description: "Node.js, Django, Ruby on Rails",
        },
        {
          icon: <FrameworkIcon className="icon-card-icon" />,
          title: "Frameworks",
          description: "Next.js, Nuxt.js, Express.js",
        },
      ]}
    />
  ),
  about: (
    <About
      title="About"
      text={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla pharetra urna, nec cursus erat sagittis a. Nullam ut sem nec turpis aliquet vehicula.",
        "Sed dapibus leo sit amet magna cursus, in bibendum magna tristique. Cras sit amet est ut mauris convallis vestibulum. Praesent aliquet, risus vel cursus consectetur, arcu odio feugiat nulla, ut fermentum libero quam eu odio.",
        "Aenean id nibh nec nunc tincidunt interdum. Ut nec arcu vitae purus suscipit vestibulum. Donec nec augue nec nisl tempus euismod a nec lectus. Etiam vitae lacus id eros fermentum euismod.",
      ]}
      icon={<img src={exampleIcon} alt="Ben's Icon" />}
    />
  ),
};
