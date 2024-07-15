// .storybook/main.js //
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  // Specify the pattern for locating your stories
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // Addons enhance the functionality of Storybook
  addons: [
    "@storybook/preset-create-react-app", // Preset for Create React App
    "@storybook/addon-onboarding", // Onboarding addon
    "@storybook/addon-links", // Links addon
    "@storybook/addon-essentials", // Essential addons like controls, actions, etc.
    "@chromatic-com/storybook", // Chromatic addon
    "@storybook/addon-interactions", // Interactions addon
    "@storybook/addon-docs", // Docs addon
  ],

  // Specify the framework configuration
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  // Static directories to be served by Storybook
  staticDirs: ["../public"],
};

export default config;
