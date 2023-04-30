import React, { useCallback } from 'react'
import styled from 'styled-components'

//COMPs
import { LangSwitcher } from '../LangSwitcher'

import { MenuLink } from 'config/types/menu'
import { useTranslation } from 'contexts/Localization'
import { colors } from 'styles/colors'
import { media } from 'styles/media'
import { useMenu } from '../hook'
import { LINK } from './contants'

const Wrapper = styled.div`
  display: none;
  ${media.lg`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  `}
`
const NavList = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0;
  display: flex;
  align-items: center;
`

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  min-width: 100px;
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    transition: all 0.4s ease;
    color: ${colors.text.light};
    padding-top: 4px;
    padding-bottom: 4px;
    &:hover {
      color: ${colors.text.main};
      border-bottom: 2px solid ${colors.text.main};
    }
  }
  .white-logo,
  .black-logo {
    position: relative;
    width: 10.438rem;
    height: 4rem;
  }
  &.active {
    a {
      color: ${colors.text.main};
      border-bottom: 2px solid ${colors.text.main};
    }
  }
`

export const DesktopMenu: React.FC = () => {
  const onScrollToView = useCallback((id: string) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }, [])
  return (
    <Wrapper>
      <NavList>
        <NavItem onClick={() => onScrollToView(LINK.ABOUT)}>
          <a>Về WOO Group Kids</a>
        </NavItem>
        <NavItem onClick={() => onScrollToView(LINK.TEAM)}>
          <a>Tại sao chọn WOO Group Kids</a>
        </NavItem>
        <NavItem onClick={() => onScrollToView(LINK.ROAD_MAP)}>
          <a>Lộ trình học</a>
        </NavItem>
        <NavItem onClick={() => onScrollToView(LINK.ROAD_MAP)}>
          <a>Đội ngũ giáo viên</a>
        </NavItem>
        <NavItem onClick={() => onScrollToView(LINK.ROAD_MAP)}>
          <a>Học viên đã nói gì </a>
        </NavItem>
      </NavList>
    </Wrapper>
  )
}
