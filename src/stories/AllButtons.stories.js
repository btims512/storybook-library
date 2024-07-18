import React from "react";
import Button, { OutlinedButton, GhostButton } from "../components/Button";

export default {
  title: "Components/Buttons",
  component: Button,
};

export const FilledButton = () => (
  <Button
    variant="btn--filled"
    label="Button"
    onClick={() => {}}
    aria-label="Filled Button"
  />
);

export const OutlinedBtn = () => (
  <OutlinedButton
    variant="btn--outlined"
    label="Button"
    onClick={() => {}}
    aria-label="Outlined Button"
  />
);

export const GhostBtn = () => (
  <GhostButton
    variant="btn--ghost"
    label="Button"
    onClick={() => {}}
    aria-label="Ghost Button"
  />
);

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
