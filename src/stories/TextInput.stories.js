import React, { useState } from "react";
import TextInput from "../components/TextInput";
import "../components/TextInput.css"; // Ensure CSS is imported

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    count: { control: { type: "number", min: 1, max: 20 } }, // Control for number of inputs
    placeholder: { control: "text" }, // Control for placeholder text
    className: { table: { disable: true } }, // Hide className from controls
    styleName: { table: { disable: true } }, // Hide styleName from controls
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ count, ...args }) => {
  const [values, setValues] = useState(Array(count).fill(""));

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div className="text-inputs-container">
      {Array.from({ length: count }).map((_, index) => (
        <TextInput
          key={index}
          value={values[index]}
          placeholder={args.placeholder}
          {...args}
        />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  count: 1,
  placeholder: "",
};
