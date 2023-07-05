import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

// COMPS
import Button from 'components/Button'
import { RegisterFormModal } from 'components/RegisterFormModal'
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
