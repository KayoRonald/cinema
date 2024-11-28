import { defineKeyframes, defineTokens } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  spin: {
    to: {
      transform: "rotate(360deg)",
    },
  },
  ping: {
    "75%, 100%": {
      transform: "scale(2)",
      opacity: "0",
    },
  },
  pulse: {
    "50%": {
      opacity: ".5",
    },
  },
  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
    },
    "50%": {
      transform: "none",
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
    },
  },
  shine: {
    "0%":{
      backgroundPosition: '-200% 0',
    },
    '100%': {
      backgroundPosition: '200% 0'
    }
  }
});

export const animations = defineTokens.animations({
  spin: { value: "spin 1s linear infinite" },
  ping: { value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" },
  pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  bounce: { value: "bounce 1s infinite" },
  shine: { value: "shine 2s linear infinite" },
});
