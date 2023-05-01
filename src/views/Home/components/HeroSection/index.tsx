import React, { useCallback } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { colors } from 'styles/colors'
import { Container } from 'components/Layout'
import { media } from 'styles/media'
import { RegisterButton } from 'components/RegisterButton'

const Nav = dynamic(() => import('components/Nav'), { ssr: false })

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 870px;
  ${media['1200px']`
    height: 641px;
  `}
  background-color: ${colors.primary.light};
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  .container {
    margin-top: 0;
  }
`
const HeroContent = styled.div`
  ${media['1200px']`
    max-width: 633px;
    min-height: 265px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `}
  display: flex;
  flex-direction: column;
  .heading {
    font-weight: 800;
    font-size: 35px;
    line-height: 53px;
  }
  .sub-heading {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: ${colors.primary.dark};
  }
`
const HeroImgWrap = styled.div``

export const HeroSection: React.FC = () => {
  const onScrollToView = useCallback((id: string) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }, [])
  return (
    <Wrapper>
      <Nav />
      <Container className="container">
        <div className="flex flex-col xlg:flex-row">
          <div className="flex-1 order-1 text-center xlg:order-[0] xlg:text-left">
            <HeroContent>
              <h1 className="heading">Tiếng Anh trẻ em - WOO Group Kids</h1>
              <p className="sub-heading">Mở khóa các kỹ năng tiếng Anh cùng WOO Group</p>
              <p className="sub-heading">
                Mở khóa các kỹ năng tiếng Anh cùng WOO Group From Zero to Fluent: English Conversation Made Easy!
              </p>
              <div className="mt-4">
                <RegisterButton
                  onClick={() => {
                    onScrollToView('#register-form')
                  }}
                >
                  {' '}
                  NHận tư vấn miễn phí
                </RegisterButton>
              </div>
            </HeroContent>
          </div>
          <div className="flex-1">
            <HeroImgWrap>
              <img src="/images/hero.png" />
            </HeroImgWrap>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
