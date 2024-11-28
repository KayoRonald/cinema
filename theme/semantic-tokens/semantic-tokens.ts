import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      main: {
        value: {
          base: "{colors.gray.300}",
          _dark: "{colors.gray.700}",
        },
      },
      muted: {
        value: {
          base: "{colors.gray.900}",
          _dark: "{colors.gray.400}",
        },
      },
      dark: {
        value: {
          base: "{colors.black}",
          _dark: "{colors.gray.400}",
        },
      },
      inverted: {
        value: { base: "{colors.white}", _dark: "{colors.black}" },
      },
      emphasized: {
        value: { base: "{colors.white}", _dark: "{colors.zinc.300}" },
      },
      "emphasized.hover": {
        value: {
          base: "{colors.gray.100}",
          _dark: "{colors.gray.800}",
        },
      },
    },
    text: {
      main: {
        value: { base: "{colors.black}", _dark: "{colors.white}" },
      },
      headline: {
        value: { base: "{colors.black}", _dark: "{colors.zinc.300}" },
      },
      muted: {
        value: {
          base: "{colors.gray.800}",
          _dark: "{colors.gray.50}",
        },
      },
    },
    fg: {
      default: {
        value: { _light: "{colors.gray.12}", _dark: "{colors.gray.12}" },
      },
      muted: {
        value: { _light: "{colors.gray.11}", _dark: "{colors.gray.11}" },
      },
      subtle: {
        value: { _light: "{colors.gray.10}", _dark: "{colors.gray.10}" },
      },
      disabled: {
        value: { _light: "{colors.gray.9}", _dark: "{colors.gray.9}" },
      },
      error: { value: { _light: "{colors.red.9}", _dark: "{colors.red.9}" } },
    },
    border: {
      default: {
        value: { _light: "{colors.gray.7}", _dark: "{colors.gray.7}" },
      },
      muted: { value: { _light: "{colors.gray.6}", _dark: "{colors.gray.6}" } },
      subtle: {
        value: { _light: "{colors.gray.4}", _dark: "{colors.gray.4}" },
      },
      disabled: {
        value: { _light: "{colors.gray.5}", _dark: "{colors.gray.5}" },
      },
      outline: {
        value: { _light: "{colors.gray.a9}", _dark: "{colors.gray.a9}" },
      },
      error: { value: { _light: "{colors.red.9}", _dark: "{colors.red.9}" } },
    },
  },
});
