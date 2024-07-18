import React from "react";
import Button, { OutlinedButton, GhostButton } from "../components/Button";

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    label: { control: "text", defaultValue: "Button" },
    variant: {
      control: "select",
      options: ["btn--filled", "btn--outlined", "btn--ghost"],
      defaultValue: "btn--filled",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: { control: "color" },
    disabled: { control: "boolean", defaultValue: false },
    loading: { control: "boolean", defaultValue: false },
    icon: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const FilledButton = Template.bind({});
FilledButton.args = {
  variant: "btn--filled",
  label: "Filled Button",
};

export const OutlinedBtn = (args) => <OutlinedButton {...args} />;
OutlinedBtn.storyName = "Outlined Button";
OutlinedBtn.args = {
  variant: "btn--outlined",
  label: "Outlined Button",
};

export const GhostBtn = (args) => <GhostButton {...args} />;
GhostBtn.storyName = "Ghost Button";
GhostBtn.args = {
  variant: "btn--ghost",
  label: "Ghost Button",
};

export const AllButtons = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "fit-content",
    }}
  >
    <Button
      variant="btn--filled"
      label="Filled Button"
      onClick={() => {}}
      aria-label="Filled Button"
    />
    <OutlinedButton
      variant="btn--outlined"
      label="Outlined Button"
      onClick={() => {}}
      aria-label="Outlined Button"
    />
    <GhostButton
      variant="btn--ghost"
      label="Ghost Button"
      onClick={() => {}}
      aria-label="Ghost Button"
    />
  </div>
);
