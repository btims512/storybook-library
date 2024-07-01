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
      header="Benjamin Tims"
      subtitle="Full Stack Software Engineer"
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
        "Howdy folks! I'm Ben, a front-end software engineer hailing from the beautiful city of Austin, TX. I've always been fascinated by technology, ever since my first Game Boy and my trusty Windows 95 computer. But it wasn't until 2019 that I decided to take the plunge and dive into programming headfirst, starting with some self-taught online courses and working my way up to a full-blown bootcamp.",
        "Before my days of coding, I spent a whopping 8 years in Apple technical support, where I became an expert in all things iOS and macOS. I even spent a good chunk of that time as a trainer, sharing my knowledge and teaching others the ropes.",
        "But after years of talking about technology, I decided it was time to get my hands dirty and see how it all works under the hood. What started as a curiosity quickly turned into a passion, and now I spend my days building beautiful and functional websites that would make my Game Boy proud.",
      ]}
      icon={<img src={exampleIcon} alt="Ben's Icon" />}
    />
  ),
};
