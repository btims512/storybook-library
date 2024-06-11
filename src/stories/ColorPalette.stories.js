import React from "react";
import ColorPalette from "../components/ColorPalette";

export default {
  title: "Design Tokens/Color",
  component: ColorPalette,
};

const Template = (args) => <ColorPalette {...args} />;

export const Default = Template.bind({});
