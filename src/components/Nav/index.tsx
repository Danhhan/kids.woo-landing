/* eslint-disable @typescript-eslint/no-use-before-define */
import { useToggleMobileMenu } from 'hooks/useToggleMobileMenu'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { DesktopMenu } from './Menu/DesktopMenu'
import { MobileMenu } from './Menu/MobileMenu'
import { Logo } from './Logo'
import { Container } from 'components/Layout'
import { colors } from 'styles/colors'
import { media } from 'styles/media'
import { LangSwitcher } from './LangSwitcher'
import Image from 'next/image'

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  .container {
    margin-top: 0;
  }
`
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: space-between;
`
const ToggleMenuWrapper = styled.div`
  cursor: pointer;
  ${media.xlg`
    display: none;
  `}
`
const VerticalDivide = styled.div`
  margin: 0 24px 0 12px;
  width: 2px;
  height: 40px;
  background-color: ${colors.text.light};
  display: none;
  ${media.lg`
    display: block;
`}
`
const RegisterButton = styled.button`
  padding: 12px;
  background-color: ${colors.primary.main};
  border-radius: 8px;
  font-weight: 590;
  font-size: 14px;
  line-height: 17px;
`
const LogoWraper = styled.a`
  width: 127px;
  height: 50px;
`

const Nav: React.FC<{ link? }> = ({ link }) => {
  const { isOpenNavMobile, toggleNavMobile } = useToggleMobileMenu()

  return (
    <Wrapper id="navbar-wrapper">
      <Container id="navbar-container" className="container">
        <StyledNav id="navbar">
          <div className="flex items-center">
            <LogoWraper href="/">
              <img src="/images/logo-1.png" />
            </LogoWraper>
            <VerticalDivide />
            <DesktopMenu />
          </div>
          <div>
            <div className="items-center gap-4 hidden xlg:flex">
              <RegisterButton>
                <span>Đăng ký tư vấn</span>
              </RegisterButton>
              <div className="flex gap-4">
                <LangSwitcher />
              </div>
            </div>
            <ToggleMenuWrapper onClick={toggleNavMobile}>
              {/* <ToggleMenuIcon width="24px" height="24px" color={colors.text.main} /> */}
            </ToggleMenuWrapper>
          </div>
        </StyledNav>
        <MobileMenu onClose={toggleNavMobile} link={link} />
      </Container>
    </Wrapper>
  )
}

export default Nav
