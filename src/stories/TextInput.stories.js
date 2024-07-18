import React, { useState } from "react";
import TextInput, { TextAreaInput } from "../components/TextInput";
import "../components/TextInput.css";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    count: { control: { type: "number", min: 1, max: 20 } },
    placeholder: { control: "text" },
    className: { table: { disable: true } },
    styleName: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ count, ...args }) => {
  const [values, setValues] = useState(Array(count).fill(""));

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  return (
    <div className="text-inputs-container">
      {Array.from({ length: count }).map((_, index) => (
        <TextInput
          key={index}
          value={values[index]}
          placeholder={args.placeholder}
          onChange={(event) => handleChange(index, event)}
          {...args}
        />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  count: 1,
  placeholder: "Enter your text here...",
};

const ParagraphTemplate = (args) => {
  const [value, setValue] = useState("");

  return (
    <TextAreaInput
      value={value}
      placeholder={args.placeholder}
      onChange={(event) => setValue(event.target.value)}
      {...args}
    />
  );
};

export const ParagraphInput = ParagraphTemplate.bind({});
ParagraphInput.args = {
  placeholder: "Enter your paragraph here...",
};
