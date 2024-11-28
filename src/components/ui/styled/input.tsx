import { ark } from '@ark-ui/react/factory'
import { input } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { styled } from 'styled-system/jsx'

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(ark.input, input)
