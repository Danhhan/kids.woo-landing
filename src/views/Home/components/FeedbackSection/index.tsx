import { Container } from 'components/Layout'
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { sizes } from 'styles/media'
import { HeadingOfSection } from '../HeadingOfSection'

const Wrapper = styled.div``
const FeedbackCard = styled.div`
  margin: 0 12px;
  width: unset !important;
  background: #ffffff;
  border: 1px solid #222222;
  box-shadow: 8px 8px 0px #222222;
  border-radius: 24px;
  overflow: hidden;
  .content {
    padding: 19px 24px 32px 24px;
  }
`
const StyledSlider = styled(Slider)`
  margin-top: 16px;
  .slick-list {
    overflow: visible;
    margin-bottom: 16px;
  }
  .slick-dots {
    /* background-color: red; */
    bottom: 0;
    li {
      button {
        &:before {
          font-size: 16px;
        }
      }
    }
  }
  .slick-slide {
    margin-bottom: 42px;
  }
`

export const FeedbackSection: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: sizes.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: sizes.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: sizes.sm,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: sizes['480px'],
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  const feedbackList = [
    {
      image: '/images/feedback-img-1.jpeg',
      userName: 'Phụ Huynh T.M.Hằng',
      content: 'Học với WOO Group bé nhà mình chủ động nói tiếng Anh nhiều hơn và rất mong chờ đến buổi các buổi học',
    },
    {
      image: '/images/feedback-img-2.jpeg',
      userName: 'Phụ Huynh T.M.Hằng',
      content: 'Học với WOO Group bé nhà mình chủ động nói tiếng Anh nhiều hơn và rất mong chờ đến buổi các buổi học',
    },
    {
      image: '/images/feedback-img-3.jpeg',
      userName: 'Phụ Huynh T.M.Hằng',
      content: 'Học với WOO Group bé nhà mình chủ động nói tiếng Anh nhiều hơn và rất mong chờ đến buổi các buổi học',
    },
  ]
  return (
    <Wrapper>
      <Container>
        <div className="w-[280px] md:w-full">
          <HeadingOfSection>Phụ huynh và học sinh nói gì sau khi học tại WOO Group Kids</HeadingOfSection>
        </div>
      </Container>
      <div className="overflow-hidden">
        <StyledSlider {...settings}>
          {feedbackList.map((item) => {
            const { image, userName, content } = item
            return (
              <FeedbackCard>
                <div className="teacher-avatar">
                  <img src={image} />
                </div>
                <div className="content">
                  <p className='text-text-light'>{`"${content}" - `}</p>
                  <p className='f16Bold text-text-main'>{userName}</p>
                </div>
              </FeedbackCard>
            )
          })}
        </StyledSlider>
      </div>
    </Wrapper>
  )
}
