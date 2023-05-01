import React, { ElementType } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { colors } from 'styles/colors'
import { LayoutProps, SpaceProps } from 'styled-system'
import { PolymorphicComponentProps } from 'utils/polymorphic'

export interface BaseButtonProps extends LayoutProps, SpaceProps {}
export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { children, ...rest } = props

  return <button {...rest}>{children}</button>
}
export default Button;
