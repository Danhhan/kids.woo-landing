import React from 'react'
import styled from 'styled-components'

import { media } from 'styles/media'
import { colors } from 'styles/colors'

import { ToggleMenuIcon } from 'components/Svg'

const ToggleMenuWrapper = styled.div`
  cursor: pointer;
  ${media.lg`
    display: none;
  `}
`

interface Props {
  onClick?(): void
}

export const ToggleMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <ToggleMenuWrapper onClick={onClick}>
      <ToggleMenuIcon width="24px" height="24px" color={colors.text.main} />
    </ToggleMenuWrapper>
  )
}
