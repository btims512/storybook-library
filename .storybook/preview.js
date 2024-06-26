// .storybook/preview.js
import "../src/global.css";
import React from "react";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Design Tokens", "Guidelines", "Components"],
        method: "alphabetical",
      },
    },
  },
  globalTypes: {
    scheme: {
      name: "Scheme",
      description: "Select light or dark theme",
      defaultValue: "default",
      toolbar: {
        icon: "mirror",
        items: ["light", "dark", "default"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const scheme = context.globals.scheme;
      const themeClass = scheme === "dark" ? "dark" : "light";
      document.body.className = themeClass;

      return <Story />;
    },
  ],
};

export default preview;
