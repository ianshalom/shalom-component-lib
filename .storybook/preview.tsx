import React from "react";

import type { Preview } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyles } from "../src/GlobalStyles";
import { globalTheme } from "../src/theme/index";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
