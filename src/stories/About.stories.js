import React from "react";
import About from "../components/About";
import exampleIcon from "./Assets/image-ben-2@3x.png";

export default {
  title: "Components/About",
  component: About,
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "About",
  text: [
    "Howdy folks! I'm Ben, a front-end software engineer hailing from the beautiful city of Austin, TX. I've always been fascinated by technology, ever since my first Game Boy and my trusty Windows 95 computer. But it wasn't until 2019 that I decided to take the plunge and dive into programming headfirst, starting with some self-taught online courses and working my way up to a full-blown bootcamp.",
    "Before my days of coding, I spent a whopping 8 years in Apple technical support, where I became an expert in all things iOS and macOS. I even spent a good chunk of that time as a trainer, sharing my knowledge and teaching others the ropes.",
    "But after years of talking about technology, I decided it was time to get my hands dirty and see how it all works under the hood. What started as a curiosity quickly turned into a passion, and now I spend my days building beautiful and functional websites that would make my Game Boy proud.",
  ],
  icon: <img src={exampleIcon} alt="Ben's Icon" />,
};
