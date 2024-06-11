import React, { useState } from "react";
import Layout from "../components/OneRowLayout";
import TextInput from "../components/TextInput";
import Text from "../components/Text";
import Button from "../components/Button";

export default {
  title: "Components/Layouts",
  component: Layout,
};

const Template = (args) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  return (
    <Layout {...args}>
      <div>
        <div
          className="inner-div one"
          // style={{ backgroundColor: "lightblue" }}
        >
          <div className="Title">
            <Text className="large-title">Here's a title</Text>
          </div>
          <div className="body">
            <Text className="headline" style={{ marginBottom: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              non tortor sed nulla tempor mattis sed sit amet sem. Quisque
              euismod ligula purus, id auctor mauris finibus eget. Integer ut
              imperdiet quam. Maecenas id scelerisque neque. Sed auctor felis
              leo, eget venenatis dolor rutrum vitae. Sed luctus ligula non eros
              aliquet fermentum. Ut non nunc sed lorem consequat aliquet at id
              nunc. Ut ut quam ut eros tincidunt porttitor. Mauris arcu neque,
              tristique nec sagittis vitae, placerat ut nibh. Fusce et pharetra
              velit, quis maximus quam. Donec venenatis justo lorem, eu finibus
              nisl rutrum vitae.
            </Text>
          </div>
        </div>
      </div>
      <div>
        <div
          className="inner-div, two"
          // style={{ backgroundColor: "lightcoral" }}
        >
          <div className="input-container">
            <TextInput
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Text"
            />
            <TextInput
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Text"
            />
            <TextInput
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder="Text"
            />
            <TextInput
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              placeholder="Text"
            />
          </div>
          <div className="btn-input-row">
            <Button
              // style={{ margin: "16px 0px 80px" }}
              label="Button"
              variant="btn--primary"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const OneRow = Template.bind({});
OneRow.args = {};
