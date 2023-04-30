/* eslint-disable react/no-array-index-key */
import React from 'react'
// Style
import styled from 'styled-components'
// Comps
import { Box } from 'components/Box'
import { media } from 'styles/media'
import { colors } from 'styles/colors'

const StyledLogoWrapper = styled(Box)`
  width: 100%;

  .logo-link {
    display: block;
    margin: 0 auto;
    width: 140px;
    height: 58px;

    ${media.md`
      width: 160px;
      height: 58px;
    `}
  }
`

const LogoWrapper: React.FC<{ data }> = ({ data }) => {
  return (
    <StyledLogoWrapper>
      <div className="flex flex-wrap items-center justify-center">
        {data.map((item, i) => (
          <div className="p-3 lg:p-0 lg:grow" key={`${i}`}>
            <a href={item.attributes.link} className="logo-link" target="_blank" rel="nofollow noreferrer">
              <img src={item.attributes.logo} alt={item.attributes.logo} />
            </a>
          </div>
        ))}
      </div>
    </StyledLogoWrapper>
  )
}
export default LogoWrapper
