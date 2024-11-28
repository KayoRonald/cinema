import { defineConfig } from "@pandacss/dev";
import { animations, keyframes } from "./theme/animations/keyframes";
import { globalStyles } from "./theme/global-css";
import { recipes } from './theme/recipes';
import { semanticTokens as semanticColor } from "./theme/semantic-tokens/semantic-tokens";
import { colors } from "./theme/tokens/colors";
import { zIndices } from "./theme/tokens/z-indeces";

export default defineConfig({
  preflight: true,
  strictTokens: false,
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
      light: ".light &",
      supportsBackdrop:
        "@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))",
    },
  },
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],
  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes,
      tokens: {
        colors,
        zIndex: zIndices,
        animations,
      },
      semanticTokens: {
        colors: semanticColor,
      },
      recipes,
    },
  },
  outdir: "styled-system",
  jsxFramework: "react",
  globalCss: globalStyles,
});
