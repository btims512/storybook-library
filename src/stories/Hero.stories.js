import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import imageBen from "./Assets/image-ben-1@3x.png";

export default {
  title: "Components/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: "Benjamin",
  subtitle: "Frontend Software Engineer",
  picture: imageBen,
  button: <Button label="View Resume" onClick={() => {}} />,
};
