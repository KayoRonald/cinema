import { ark } from '@ark-ui/react/factory'
import { button } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { styled } from 'styled-system/jsx'

export type ButtonProps = ComponentProps<typeof Button>
export const Button = styled(ark.button, button)
