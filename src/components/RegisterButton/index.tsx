import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { colors } from 'styles/colors'

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

interface RegisterButtonProps {
  children: React.ReactNode
}
export const RegisterButton: React.FC<RegisterButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}
