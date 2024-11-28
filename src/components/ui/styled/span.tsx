import { styled } from 'styled-system/jsx'
import { type TextVariantProps, text } from 'styled-system/recipes'
import type { ComponentProps, StyledComponent } from 'styled-system/types'

type TextProps = TextVariantProps & { as?: React.ElementType }

export type SpanProps = ComponentProps<typeof Span>
export const Span = styled('span', text) as StyledComponent<'span', TextProps>