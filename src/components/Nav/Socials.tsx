import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { colors } from 'styles/colors'

import { Flex } from 'components/Box'
import { DiscordIcon, TelegramIcon, TwitterIcon } from 'components/Svg'

const IconWrap = styled.div`
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
`

export const Socials: React.FC<{ link? }> = ({ link }) => {
  return (
    <Flex className="socials-wrapper" mx="-4px" alignItems="center">
      <Link href={link?.twitter?.link || '/'}>
        <IconWrap className="social-icon-wrap">
          <TwitterIcon width="40px" height="40px" color={colors.common.white} />
        </IconWrap>
      </Link>

      <Link href={link?.discord?.link || '/'}>
        <IconWrap className="social-icon-wrap">
          <DiscordIcon width="40px" height="40px" color={colors.common.white} />
        </IconWrap>
      </Link>

      <Link href={link?.telegram?.link || '/'}>
        <IconWrap className="social-icon-wrap">
          <TelegramIcon width="40px" height="40px" color={colors.common.white} />
        </IconWrap>
      </Link>
    </Flex>
  )
}
