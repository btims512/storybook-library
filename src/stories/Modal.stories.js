import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Modal Title",
  children: "This is the content of the modal.",
};
