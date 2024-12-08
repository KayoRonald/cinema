import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  className: "input",
  jsx: ["Input"],
  base: {
    appearance: "none",
    background: "none",
    borderColor: "border.default",
    borderRadius: "12",
    borderWidth: "1px",
    outline: "none",
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "box-shadow, border-color",
    width: "full",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _focus: {
      borderColor: "colorPalette.default",
      boxShadow: "0 0 0 1px var(--colors-color-palette-default)",
    },
    _invalid: {
      borderColor: "fg.error",
      _focus: {
        borderColor: "fg.error",
        boxShadow: "0 0 0 1px var(--colors-border-error)",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      "2xs": { px: "1.5", h: "7", minW: "7", fontSize: "xs" },
      xs: { px: "2", h: "8", minW: "8", fontSize: "xs" },
      sm: { px: "2.5", h: "9", minW: "9", fontSize: "sm" },
      md: { px: "3", h: "10", minW: "10", fontSize: "md" },
      lg: { px: "3.5", h: "11", minW: "11", fontSize: "md" },
      xl: { px: "4", h: "12", minW: "12", fontSize: "lg" },
      "2xl": { px: "4.5", h: "16", minW: "16", textStyle: "3xl" },
    },
  },
});
