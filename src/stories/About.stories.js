import React from "react";
import About from "../components/About";
import exampleIcon from "./assets/image-ben-2@3x.png";

export default {
  title: "Components/About",
  component: About,
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "About",
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla pharetra urna, nec cursus erat sagittis a. Nullam ut sem nec turpis aliquet vehicula.",
    "Sed dapibus leo sit amet magna cursus, in bibendum magna tristique. Cras sit amet est ut mauris convallis vestibulum. Praesent aliquet, risus vel cursus consectetur, arcu odio feugiat nulla, ut fermentum libero quam eu odio.",
    "Aenean id nibh nec nunc tincidunt interdum. Ut nec arcu vitae purus suscipit vestibulum. Donec nec augue nec nisl tempus euismod a nec lectus. Etiam vitae lacus id eros fermentum euismod.",
  ],
  icon: <img src={exampleIcon} alt="Ben's Icon" aria-hidden="true" />,
};
