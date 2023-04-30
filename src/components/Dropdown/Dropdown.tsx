import React, { useEffect, useState } from 'react'
import throttle from 'lodash/throttle'
import styled, { css } from 'styled-components'
import { DropdownProps, PositionProps, Position } from './types'
import { colors } from 'styles/colors'

const getLeft = ({ position }: PositionProps) => {
  if (position === 'top-right') {
    return '100%'
  }
  return '50%'
}

const getBottom = ({ position }: PositionProps) => {
  if (position === 'top' || position === 'top-right') {
    return '100%'
  }
  return 'auto'
}

const DropdownContent = styled.div<{ position: Position }>`
  width: max-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  background-color: ${colors.common.white};
  left: ${getLeft};
  bottom: ${getBottom};
  padding: 16px;
  max-height: 0px;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0s 0.3s, opacity 0.3s ease-in-out;
  will-change: opacity;
  pointer-events: none;
`

const Container = styled.div<{ $scrolling: boolean }>`
  position: relative;
  ${({ $scrolling }) =>
    !$scrolling &&
    css`
      &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
        opacity: 1;
        max-height: 400px;
        overflow-y: auto;
        transition: max-height 0s 0s, opacity 0.3s ease-in-out;
        pointer-events: auto;
      }
    `}
`

const Dropdown: React.FC<DropdownProps> = ({ target, position = 'bottom', children }) => {
  const [scrolling, setScrolling] = useState(false)

  return (
    <Container $scrolling={scrolling}>
      {target}
      <DropdownContent className="dropdown-content" position={position}>
        {children}
      </DropdownContent>
    </Container>
  )
}
Dropdown.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  position: 'bottom',
}

export default Dropdown
