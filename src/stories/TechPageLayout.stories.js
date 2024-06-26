import React from "react";
import TechPageLayout from "../components/TechPageLayout";
import { ReactComponent as FrontEndIcon } from "./Assets/react-2.svg";
import { ReactComponent as BackEndIcon } from "./Assets/icon-data.svg";
import { ReactComponent as FrameworkIcon } from "./Assets/icon-js.svg";

export default {
  title: "Layouts/TechPageLayout",
  component: TechPageLayout,
};

const Template = (args) => <TechPageLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Technologies",
  iconCards: [
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
  ],
};
