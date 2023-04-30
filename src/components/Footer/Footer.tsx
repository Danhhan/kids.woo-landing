//Comps
import { Container } from 'components/Layout'
import { BuildingIcon, EmailIcon, PhoneIcon, PositionIcon } from 'components/Svg'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
// Style
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'
import { addressConfig, serviceInfoConfig } from './constants'

const StyledFooter = styled.footer`
  border-top: 1px solid #dfe0df;
  padding-top: 40px;
  padding-bottom: 24px;
  background-image: url('/images/footer-bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.common.white};
`
const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  flex-direction: column;
  ${media.lg`
    flex-direction: row;
    gap: 80px;
  `}
`
const SubTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.common.white};
  position: relative;
  padding-bottom: 4px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${colors.primary.main};
    width: 40px;
    height: 1px;
  }
`
const LogoWrap = styled.div`
  width: 159.07px;
  height: 95.19px;
`
const FooterContent = styled.div`
  width: 100%;
  ${media.lg`
    width: calc(100% - 208px);
  `}

  flex: 1;
`

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <StyledFooter>
      <StyledContainer>
        <LogoWrap>
          <img src="/images/yellow-logo.png" />
        </LogoWrap>
        <FooterContent>
          <h3 className="font-bold text-[28px] text-primary">CÔNG TY TNHH GIÁO DỤC WOO GROUP</h3>
          <div className="flex flex-col lg:flex-row mt-10 gap-9">
            <ul className="flex flex-col gap-3 w-full lg:w-[500px]">
              <li className="flex items-start gap-4">
                <span>
                  <PositionIcon />
                </span>
                <div>
                  <SubTitle>Trụ sở chính</SubTitle>
                  <p>
                    Văn phòng Hồ Chí Minh: Tòa nhà hạng A Vincom Center Đồng Khởi, 72 Lê Thánh Tôn, Phường Bến Nghé,
                    Quận 1, TP Hồ Chí Minh
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span>
                  <BuildingIcon />
                </span>
                <div>
                  <SubTitle>Giấy phép kinh doanh</SubTitle>
                  <p>GPKD số 0317729987 cấp bởi Sở Kế Hoạch và Đầu Tư TP Hồ Chí Minh</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span>
                  <PhoneIcon />
                </span>
                <div>
                  <SubTitle>Hotline</SubTitle>
                  <p>0788-24-28-79</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span>
                  <EmailIcon />
                </span>
                <div>
                  <SubTitle>Email</SubTitle>
                  <p>helloenglishxinchao@gmail.com</p>
                </div>
              </li>
            </ul>
            <div className="flex-1 w-full">
              <div>
                <SubTitle>Tải Để Học Tiếng Anh Miễn Phí</SubTitle>
                <ul className="mt-5">
                  <li className="w-[192px]">
                    <a href="/">
                      <img src="/images/google-play.jpeg" />
                    </a>
                  </li>
                  <li className="w-[192px] mt-4">
                    <a href="/">
                      <img src="/images/app-store.jpeg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <SubTitle>Mạng xã hội</SubTitle>
                <ul className="flex gap-4 mt-4">
                  <li className="w-10">
                    <a href="/">
                      <img src="/images/zalo.png" />
                    </a>
                  </li>
                  <li className="w-10">
                    <a href="/">
                      <img src="/images/facebook.png" />
                    </a>
                  </li>
                  <li className="w-10">
                    <a href="/">
                      <img src="/images/youtube.png" />
                    </a>
                  </li>
                  <li className="w-10">
                    <a href="/">
                      <img src="/images/skype.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FooterContent>
      </StyledContainer>
      <div className="md:text-center w-full mt-6">
        <Container>
          <h5 className="f14Regular text-primary">© 2023 WOO. All rights reserved</h5>
        </Container>
      </div>
    </StyledFooter>
  )
}

export default Footer
