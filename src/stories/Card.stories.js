// src/stories/Card.stories.jsx
import React from "react";
import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    count: { control: "number" },
  },
};

const Template = (args) => {
  const cards = Array(args.count)
    .fill()
    .map((_, i) => (
      <Card
        key={i}
        className="radius-default"
        title={args.title || `Card Title ${i + 1}`}
        content={
          args.content ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        }
      />
    ));

  return <div className="card-container">{cards}</div>;
};

export const Basic = Template.bind({});
Basic.args = {
  title: "Card Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  count: 1,
};
