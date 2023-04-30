import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/Layout'
import { HeadingOfSection } from '../HeadingOfSection'
import { media } from 'styles/media'
import { floatingAnim } from 'styles/animations'

const Wrapper = styled.div`
  position: relative;
  .paper-plane-wrap {
    width: 73px;
    position: absolute;
    top: 34px;
    right: 75px;
    ${media.md`
      top: 0;
      right: 36%;
    `}
    animation: ${floatingAnim('-10px', '-30px')} 3s ease-in-out infinite;
    animation-delay: 1s;
  }
`
const FeatureList = styled.div`
  margin-top: 39px;
  margin-bottom: -40px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -11px;
  ${media.md`
    margin-left: -32px;
    margin-top: 90px;
  `}
`
const FeatureItem = styled.div<{ color }>`
  margin-left: 11px;
  width: calc(50% - 11px);
  ${media.md`
    margin-left: 32px;
    width: calc(33.33% - 32px);
    padding: 60px 32px 24px 32px;
    margin-bottom: 74px;
  `}
  border: ${({ color }) => `0.46978px solid ${color}`};
  box-shadow: ${({ color }) => `2.81868px 2.81868px 0px ${color}`};
  border-radius: 9.3956px;
  padding: 28px 15px 11px 15px;
  position: relative;
  .image-wrap {
    width: 50px;
    height: 50px;
    ${media.md`
      width: 100px;
      height: 100px;
      top: -66px;
    `}
    position: absolute;
    top: -32px;
    left: 10px;
  }
  margin-bottom: 40px;
`

export const FeatureSection: React.FC = () => {
  const featureList = [
    {
      image: '/images/feature-icon-1.png',
      text: 'Nội dung học tập thú vị tạo cảm hứng học tập cho trẻ',
      color: '#01B8F1',
    },
    {
      image: '/images/feature-icon-2.png',
      text: 'Môi trường học tập vui vẻ, không tạo áp lực cho trẻ',
      color: '#1BBB7E',
    },
    {
      image: '/images/feature-icon-3.png',
      text: 'Giúp trẻ tự tin chinh phục các bài thi chuẩn quốc tế',
      color: '#FF9900',
    },
    {
      image: '/images/feature-icon-4.png',
      text: 'Đội ngũ giáo viên Việt Nam nước ngoài tận tâm, kinh nghiệm phong phú',
      color: '#FF4D4D',
    },
    {
      image: '/images/feature-icon-5.png',
      text: 'Học phí rẻ nhất thị trường, lộ trình giảng dạy đảm bảo chất lượng tốt nhất cho trẻ',
      color: '#8247FF',
    },
    {
      image: '/images/feature-icon-6.png',
      text: 'Cam kết hiệu quả bằng văn bản',
      color: '#FF008A',
    },
  ]
  return (
    <Wrapper>
      <Container>
        <div>
          <HeadingOfSection>Tại sao chọn WOO Group Kids</HeadingOfSection>
          <p className="f14Regular text-text-light">Học tiếng Anh, khám phá thế giới!</p>
          <div className="paper-plane-wrap">
            <img src="images/paper-plane.png" />
          </div>
          <FeatureList>
            {featureList.map((item, index) => {
              const { image, text, color } = item
              return (
                <FeatureItem key={index} color={color}>
                  <div className="image-wrap">
                    <img src={image} />
                  </div>
                  <p className="f12Regular text-text-main">{text}</p>
                </FeatureItem>
              )
            })}
          </FeatureList>
        </div>
      </Container>
    </Wrapper>
  )
}
