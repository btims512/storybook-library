// src/stories/AllButtons.stories.js

import React from "react";
import Button, { OutlinedButton, GhostButton } from "../components/Button";

export default {
  title: "Components/AllButtons",
  component: Button,
  parameters: {
    docsOnly: true,
  },
};

export const AllButtons = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "fit-content" }}>
    <Button variant="btn--filled" label="Filled Button" onClick={() => {}} />
    <OutlinedButton variant="btn--outlined" label="Outlined Button" onClick={() => {}} />
    <GhostButton variant="btn--ghost" label="Ghost Button" onClick={() => {}} />
  </div>
);
