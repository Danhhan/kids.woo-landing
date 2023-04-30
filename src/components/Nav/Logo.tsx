import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Box } from 'components/Box'
import Image from 'next/image'

const Wrapper = styled.div`
  cursor: pointer;
  .white-logo,
  .black-logo {
    position: relative;
    width: 41px;
    height: 52px;
  }
`

export const Logo = () => {
  return (
    <Link href="/">
      <Wrapper>
        <Box className="white-logo">
          <Image className="white-logo" src="/images/tmp-logo.png" alt="Hello" layout="fill" />
        </Box>
      </Wrapper>
    </Link>
  )
}
