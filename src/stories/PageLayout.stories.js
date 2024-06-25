import React from "react";
import PageLayout from "../components/PageLayout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero"; // Uncomment if you have a Hero component
import Projects from "../components/ProjectCard";
import Technologies from "../components/Technologies"; // Uncomment if you have a Technologies component
import About from "../components/About"; // Uncomment if you have an About component

export default {
  title: "Layouts/PageLayout",
  component: PageLayout,
};

const Template = (args) => <PageLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
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
  hero: <Hero />, // Uncomment if you have a Hero component
  projects: <Projects />,
  technologies: <Technologies />, // Uncomment if you have a Technologies component
  about: <About />, // Uncomment if you have an About component
};
