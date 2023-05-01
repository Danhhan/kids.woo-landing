import Button from 'components/Button'
import { Modal } from 'components/Modal'
import { RegisterFormModal } from 'components/RegisterFormModal'
import { RegisterSuccessModal } from 'components/RegisterSuccessModal'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

// COMPS
import { AboutUsSection } from './components/AboutUsSection'
import { BenifitSection } from './components/BenifitSection'
import { FeatureSection } from './components/FeatureSection'
import { FeedbackSection } from './components/FeedbackSection'
import { HeroSection } from './components/HeroSection'
import { RegisterFormSection } from './components/RegisterFormSection'
import { RoadMapSection } from './components/RoadMapSection'
import { TeacherSection } from './components/TeacherSection'

const StyledHome = styled.div`
  background-color: ${colors.common.white};
  ${media.md`
    background-color: ${colors.bg};
  `}
`
const Wrapper = styled.div`
  width: 816px;
  background: linear-gradient(289.54deg, rgba(255, 207, 39, 0.72) 1.48%, #ffbf00 99.1%);
  border: 1px solid #222222;
  box-shadow: 12px 12px 0px #222222;
  border-radius: 16px;
  z-index: 11;
`
const ModalContent = styled.div`
  padding: 32px;
  position: relative;
`
const CloseButton = styled(Button)`
  background: #fa6466;
  border: 0.75px solid #222222;
  box-shadow: 1px 1px 0px #222222;
  border-radius: 500px;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 6;
`
const StyledForm = styled.form`
  margin-top: 24px;
  margin: 24px auto 0 auto;
  text-align: center;
  width: 334px;
  .icon-group {
    background-color: ${colors.common.black2};
    height: 22px;
    border-radius: 183.486px;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16.39px;
  }
  .content {
    margin-top: 16px;
    input {
      width: 100%;
      padding: 12px 16px;
      outline: none;
      border: none;
      border: 1px solid #e6e8ef;
      border-radius: 8px;
    }
  }
  button {
    background-color: ${colors.blue1};
    color: ${colors.common.white};
    background: #083d77;
    box-shadow: 6px 6px 0px #222222;
    border-radius: 8px;
    padding: 12px 16px;
    margin-top: 16px;
  }
`
const Home = () => {
  return (
    <StyledHome>
      <HeroSection />
      <AboutUsSection />
      <FeatureSection />
      <RoadMapSection />
      <TeacherSection />
      <BenifitSection />
      <FeedbackSection />
      <RegisterFormSection />
      <RegisterFormModal />
    </StyledHome>
  )
}

export default Home
