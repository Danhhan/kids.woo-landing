/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'


import { Box, Flex } from 'components/Box'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 100vw;
  height: 100vh;
  height: var(--window-height);
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  z-index: 100;
  backdrop-filter: blur(5px);

  transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
  transform: translate3d(100%, 0px, 0px) translate3d(0px, 0px, 0px);
`

const Menu = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  margin-top: -12px;
  margin-bottom: -12px;
`

const MenuItem = styled.li`
  cursor: pointer;
  padding: 8px 12px;
  margin-top: 12px;
  margin-bottom: 12px;

  a {
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
  }
`

const MobileSocialsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 16px;

  .social-icon-wrap {
    margin-left: 12px;
    margin-right: 12px;
  }

  svg {
  }
`
interface Props {
  onClose: () => void
  link?: unknown
}

export const MobileMenu: React.FC<Props> = ({ onClose, link }) => {
  const { t } = useTranslation()

  // return (
  //   <Wrapper id="mobile-menu">
  //     <Flex height="100%" flexDirection="column">
  //       <Flex width="100%" alignItems="center" justifyContent="flex-end">
  //         <Box style={{ cursor: 'pointer' }} p="12px" onClick={onClose}>
  //           {/* <CloseIcon width="24px" height="24px" color={colors.common.black} /> */}
  //         </Box>
  //       </Flex>

  //       <Menu>
  //         {menuList?.map((item, index) => (
  //           <MenuItem
  //             className={activeMenuItem?.href === item.href ? 'active' : ''}
  //             key={index}
  //             onClick={() => onClickNavItem(item)}
  //           >
  //             <a>{item.label}</a>
  //           </MenuItem>
  //         ))}
  //       </Menu>
  //     </Flex>
  //   </Wrapper>
  // )
  return null;
}
