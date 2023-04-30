import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'

const StyledButton = styled.button<{ fullWidth?: boolean }>`
  background-color: ${colors.primary.main};
  color: ${colors.common.black};
  font-weight: 600;
  line-height: 24px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  border-radius: 8px;
`
interface ButtonProps {
  children: React.ReactElement
  fullWidth?: boolean
  className?: string
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
