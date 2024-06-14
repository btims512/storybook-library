// src/stories/Tooltip.stories.jsx
import React from "react";
import Tooltip from "../components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{ margin: "200px", display: "flex", justifyContent: "center" }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    position: {
      control: {
        type: "select",
        options: ["top", "right", "bottom", "left"],
      },
    },
    content: { control: "text" },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Top = Template.bind({});
Top.args = {
  position: "top",
  content: (
    <div>
      <strong>Tooltip Top</strong>
      <p>
        Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem
        ipsum sit dolor amet lore...
      </p>
    </div>
  ),
};

export const Right = Template.bind({});
Right.args = {
  position: "right",
  content: (
    <div>
      <strong>Tooltip Right</strong>
      <p>
        Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem
        ipsum sit dolor amet lore...
      </p>
    </div>
  ),
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
  content: (
    <div>
      <strong>Tooltip Bottom</strong>
      <p>
        Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem
        ipsum sit dolor amet lore...
      </p>
    </div>
  ),
};

export const Left = Template.bind({});
Left.args = {
  position: "left",
  content: (
    <div>
      <strong>Tooltip Left</strong>
      <p>
        Conteúdo lorem ipsum sit doloramet lorem ipsum sit dolor amet lorem
        ipsum sit dolor amet lore...
      </p>
    </div>
  ),
};
