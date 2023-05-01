import React, { ElementType } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { colors } from 'styles/colors'
import { LayoutProps, SpaceProps } from 'styled-system'
import { PolymorphicComponentProps } from 'utils/polymorphic'

const StyledButton = styled.button`
  padding: 16px 32px;
  border-radius: 8px;
  background-color: ${colors.primary.main};
  box-shadow: 8px 8px 0px #222222;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  min-width: 302px;
`
export interface BaseButtonProps extends LayoutProps, SpaceProps {}
export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;

export const RegisterButton = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}
