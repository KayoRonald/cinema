import { defineGlobalStyles } from '@pandacss/dev'

export const globalStyles = defineGlobalStyles({
  html: {
    fontFamily: 'sans'
  },
  body: {
    bg: { base: 'zinc.50', _dark: 'gray.900' },
    color: { base: 'zinc.900', _dark: 'zinc.50' }
  },
})