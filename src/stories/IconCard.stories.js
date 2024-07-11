import React from "react";
import IconCard from "../components/IconCard";
import { ReactComponent as FrontEnd } from "./Assets/react-2.svg";
// import { ReactComponent as BackEnd } from "./Assets/icon-data.svg";
// import { ReactComponent as FrameWork } from "./Assets/icon-js.svg";

export default {
  title: "Components/IconCard",
  component: IconCard,
};

const Template = (args) => <IconCard {...args} />;

export const FrontEndIcon = Template.bind({});
FrontEndIcon.args = {
  icon: <FrontEnd className="icon-card-icon" />,
  title: "Technologies",
  description: "Description of icon here.",
};

// export const BackEndIcon = Template.bind({});
// BackEndIcon.args = {
//   icon: <BackEnd className="icon-card-icon" />,
//   title: "Back-End",
//   description: "Description of back-end development.",
// };

// export const FrameWorkIcon = Template.bind({});
// FrameWorkIcon.args = {
//   icon: <FrameWork className="icon-card-icon" />,
//   title: "Frameworks & Libraries",
//   description: "Description of various frameworks.",
// };
