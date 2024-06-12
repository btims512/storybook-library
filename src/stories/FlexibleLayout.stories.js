import React, { useState } from "react";
import FlexibleLayout from "../components/FlexibleLayout";
import TextInput from "../components/TextInput";
import Text from "../components/Text";
import Button from "../components/Button";

export default {
  title: "Components/Layouts",
  component: FlexibleLayout,
  argTypes: {
    rows: { control: { type: "number", min: 1, max: 10 } },
    children: { control: false },
  },
};

const Template = (args) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const renderLayoutContent = () => (
    <>
      <div className="inner-div one">
        <div className="Title">
          <Text className="large-title">Here's a title</Text>
        </div>
        <div className="body">
          <Text className="headline" style={{ marginBottom: "24px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            non tortor sed nulla tempor mattis sed sit amet sem. Quisque euismod
            ligula purus, id auctor mauris finibus eget. Integer ut imperdiet
            quam. Maecenas id scelerisque neque. Sed auctor felis leo, eget
            venenatis dolor rutrum vitae. Sed luctus ligula non eros aliquet
            fermentum. Ut non nunc sed lorem consequat aliquet at id nunc. Ut ut
            quam ut eros tincidunt porttitor. Mauris arcu neque, tristique nec
            sagittis vitae, placerat ut nibh. Fusce et pharetra velit, quis
            maximus quam. Donec venenatis justo lorem, eu finibus nisl rutrum
            vitae.
          </Text>
        </div>
      </div>
      <div className="inner-div two">
        <div className="input-container">
          <TextInput
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder=""
          />
          <TextInput
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder=""
          />
          <TextInput
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            placeholder=""
          />
          <TextInput
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            placeholder=""
          />
          <div className="btn-input-row" style={{ marginTop: "10px" }}>
            <Button label="Button" variant="btn--primary" />
          </div>
        </div>
      </div>
    </>
  );

  return <FlexibleLayout {...args}>{renderLayoutContent()}</FlexibleLayout>;
};

export const RowLayout = Template.bind({});
RowLayout.args = {
  rows: 1,
};
