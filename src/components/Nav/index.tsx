/* eslint-disable @typescript-eslint/no-use-before-define */
import { useToggleMobileMenu } from 'hooks/useToggleMobileMenu'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Container } from 'components/Layout'
import { colors } from 'styles/colors'
import { media } from 'styles/media'
import Image from 'next/image'
import { DesktopMenu } from './Menu/DesktopMenu'
import { MobileMenu } from './Menu/MobileMenu'
import { Logo } from './Logo'
import { LangSwitcher } from './LangSwitcher'

const Wrapper = styled.div``
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  &.sticky {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: ${colors.primary.light};
    box-shadow: 0 1px 2px 0 hsl(0deg 0% 80% / 24%);
    z-index: 10;
    padding: 0 16px;
    ${media.lg`
      padding: 0 80px;
    `};
  }
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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      const navbarContainer: HTMLElement = document.getElementById('navbar-container')
      navbarContainer.style.setProperty('--window-height', `${window.innerHeight}px`)

      if (window.innerWidth >= 1024 && isOpenNavMobile) {
        toggleNavMobile()
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpenNavMobile, toggleNavMobile])

  const handleScroll = () => {
    const navbarContainer: HTMLElement = document.getElementById('navbar-container')
    const navbar: HTMLElement = document.getElementById('navbar')
    const sticky = navbar.offsetHeight

    if (window.pageYOffset >= 1) {
      navbar.classList.add('sticky')
      navbarContainer.style.paddingTop = `${sticky}px`
    } else {
      navbar.classList.remove('sticky')
      navbarContainer.style.paddingTop = '0px'
    }
  }
  const onScrollToView = useCallback((id: string) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

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
            <RegisterButton
              onClick={() => {
                onScrollToView('#register-form')
              }}
            >
              <span>Đăng ký tư vấn</span>
            </RegisterButton>
          </div>
        </StyledNav>
        <MobileMenu onClose={toggleNavMobile} link={link} />
      </Container>
    </Wrapper>
  )
}

export default Nav
