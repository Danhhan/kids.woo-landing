import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

const Wrapper = styled.div`
  h2 {
    color: ${colors.text.main};
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    ${media.md`
      font-size: 32px;
      line-height: 47px;
    `}
  }
  .img-wrap {
    width: 85px;
  }
`

interface Props {
  children: React.ReactNode
}
export const HeadingOfSection: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <h2>{children}</h2>
      <div className="img-wrap">
        <img src="/images/bottom-of-heading.png" />
      </div>
    </Wrapper>
  )
}
