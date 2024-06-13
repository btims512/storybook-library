import React from "react";
import Accordion from "../components/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    rows: { control: { type: "number", min: 1, max: 10 } },
    title: { control: "text" },
    body: { control: "text" },
    children: { control: false },
  },
};

const Template = (args) => {
  const accordions = Array(args.rows)
    .fill()
    .map((_, i) => ({
      title: args.title || `Accordion Title ${i + 1}`,
      children: (
        <p className="body-1">
          {args.body ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      ),
    }));

  return (
    <>
      {accordions.map((accordion, index) => (
        <Accordion key={index} {...accordion} />
      ))}
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  rows: 1,
  title: "Accordion Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
