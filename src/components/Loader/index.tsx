import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { colors } from 'styles/colors'

const StyledButton = styled.button``

interface LoaderProps {
  children: React.ReactNode
}
export const Loader: React.FC<LoaderProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}
