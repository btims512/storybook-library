import React from "react";
import ResponsiveLayout from "../components/ResponsiveLayout";
import Text from "../components/Text";

export default {
  title: "Layouts/PageTemplate",
  component: ResponsiveLayout,
  argTypes: {
    header: { control: false },
    children: { control: false },
  },
};

const Template = (args) => <ResponsiveLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: (
    <div style={{ padding: "16px", background: "lightgray" }}>Header</div>
  ),
  children: (
    <div>
      <Text className="large-title" as="h1">
        Here's a title
      </Text>
      <Text className="headline" style={{ marginBottom: "24px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
        tortor sed nulla tempor mattis sed sit amet sem. Quisque euismod ligula
        purus, id auctor mauris finibus eget. Integer ut imperdiet quam.
        Maecenas id scelerisque neque. Sed auctor felis leo, eget venenatis
        dolor rutrum vitae. Sed luctus ligula non eros aliquet fermentum. Ut non
        nunc sed lorem consequat aliquet at id nunc. Ut ut quam ut eros
        tincidunt porttitor. Mauris arcu neque, tristique nec sagittis vitae,
        placerat ut nibh. Fusce et pharetra velit, quis maximus quam. Donec
        venenatis justo lorem, eu finibus nisl rutrum vitae.
      </Text>
      <Text className="headline" style={{ marginBottom: "24px" }}>
        Another section of text to demonstrate spacing.
      </Text>
    </div>
  ),
};
