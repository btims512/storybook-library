// manager.js
import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    brandTitle: "My Storybook Library",
    brandUrl: "https://bentims.com",
    brandImage: "/logo-bt-wordmark.svg",
    brandTarget: "_self",
    colorSecondary: "#708090",
    appBorderColor: "#cccccc",
    barTextColor: "#666666",
  }),
});
