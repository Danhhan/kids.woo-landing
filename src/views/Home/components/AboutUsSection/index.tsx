import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from 'components/Layout'
import { CircleCloseIcon, MinusIcon, PlusIcon } from 'components/Svg'
import { colors } from 'styles/colors'
import { media } from 'styles/media'
import { LINK } from 'components/Nav/Menu/contants'
import { HeadingOfSection } from '../HeadingOfSection'

const Wrapper = styled.div`
  position: relative;
  .content {
    p {
      font-weight: 400;
      font-size: 16px;
      color: ${colors.text.light};
    }
  }
  .missile-img {
    display: none;
    ${media.xlg`
      display: block;
      width: 137px;
      position: absolute;
      right: -48px;
      bottom: 0;
    `}
  }
  .preview-video {
    margin: 40px 0;
    ${media.xlg`
      display: none;
    `}
  }
`
const PreviewVideoWrap = styled.div`
  background-color: ${colors.primary.light2};
  width: calc(100% - 12px);
  ${media.md`
    width: 768px;
    margin: 0 auto;
  `}
  box-shadow: 12px 12px 0px ${colors.common.black2};
  border-radius: 22px;
  padding: 16px;
  z-index: 1;
  .logo {
    width: 38.55px;
  }
  .icon-group {
    background-color: ${colors.common.black2};
    height: 22px;
    border-radius: 183.486px;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16.39px;
  }
  .preview-video-bottom {
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    iframe {
      min-height: 291px;
      width: 100%;
      ${media.md`
        height: 410px;
      `}
    }
  }
  .play-video-button {
    width: 101px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`

export const AboutUsSection: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState('')
  return (
    <Wrapper id="about">
      <Container className="relative">
        <div className="flex gap-10">
          <div className="flex-1 content">
            <button
              onClick={() => {
                console.log('okok')
              }}
            >
              OKOKOKOKOK
            </button>
            <HeadingOfSection>Về WOO Group Kids</HeadingOfSection>
            <p className="mt-6">
              Chương trình dành cho trẻ em của WOO Group hướng đến mục tiêu giúp các bạn nhỏ bắt đầu hành trình làm quen
              với tiếng Anh một cách tự nhiên nhất bằng cách được học các kỹ năng Nghe - Nói - Đọc - Viết, ngữ pháp,...
              bằng tiếng Anh với những giáo viên tâm huyết của Việt Nam và nhiều quốc gia trên thế giới.
            </p>
            <div className="flex-1 relative preview-video">
              <PreviewVideoWrap>
                <div className="flex gap-4 mb-[18px]">
                  <img className="logo" src="/images/logo-2.png" />
                  <div className="icon-group flex flex-1 gap-[7px]">
                    <CircleCloseIcon />
                    <MinusIcon />
                    <PlusIcon />
                  </div>
                </div>
                <div className="preview-video-bottom">
                  {/* <img src="/images/banner-preview-video.jpg" />
                  <button className="play-video-button">
                    <img src="/images/play-video-icon.png" />
                  </button> */}
                  <iframe
                    src="//www.youtube.com/embed/2RG_yqtU4vA?autoplay=1&mute=1"
                    name="youtube embed"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </PreviewVideoWrap>
              {/* <div className="missile-img">
                <img src="/images/missile.png" />
              </div> */}
            </div>
            <p className="my-6">
              Bằng phương pháp học đặc thù, các bạn nhỏ sẽ được tiếp xúc với tiếng Anh thông qua những hoạt động học tập
              mới lạ với giáo viên nhằm bảo đảm các con được thực hành tối đa trong mỗi giờ học và có sự tương tác đa
              chiều vô cùng thú vị với bài học để cảm thấy việc học tiếng Anh thật vui và bổ ích. Đây sẽ là bước đà giúp
              các em thêm yêu thích việc học tiếng Anh cũng như tự tin chinh phục những cấp độ cao hơn của các bài thi
              quốc tế trong tương lai.
            </p>
            <p>Tiếng Anh rất thú vị, các bạn nhỏ hãy cùng Chơi và Học tiếng Anh với WOO Group nhé!</p>
          </div>
          <div className="flex-1 relative hidden xlg:block">
            <PreviewVideoWrap>
              <div className="flex gap-4 mb-[18px]">
                <img className="logo" src="/images/logo-2.png" />
                <div className="icon-group flex flex-1 gap-[7px]">
                  <CircleCloseIcon />
                  <MinusIcon />
                  <PlusIcon />
                </div>
              </div>
              <div className="preview-video-bottom">
                <iframe
                  className="desktop"
                  src="//www.youtube.com/embed/2RG_yqtU4vA"
                  name="youtube embed"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </PreviewVideoWrap>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
