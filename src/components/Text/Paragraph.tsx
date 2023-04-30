import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/media'

import Text from './Text'
import { TextProps } from './types'

interface Props extends TextProps {
  children: React.ReactNode
  className?: string
}

const StyledText = styled(Text)`
  font-size: 16px;
  line-height: 1.2;

  ${media.sm`
    font-size: 20px;
    line-height: 1.5;
  `}
`

const Paragraph: React.FC<Props> = (props) => {
  const { children, ...rest } = props
  return (
    <StyledText as="p" {...rest}>
      {children}
    </StyledText>
  )
}

export default Paragraph
