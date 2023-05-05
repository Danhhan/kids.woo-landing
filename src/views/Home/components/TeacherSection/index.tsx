import { Container } from 'components/Layout'
import { CalendarIcon, StarIcon } from 'components/Svg'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { sizes } from 'styles/media'
import { HeadingOfSection } from '../HeadingOfSection'

const Wrapper = styled.div``
const TeacherCard = styled.div`
  margin: 0 12px;
  width: unset !important;
  padding: 62px 24px 16px 24px;
  background: #ffffff;
  border: 1px solid #222222;
  box-shadow: 8px 8px 0px #222222;
  border-radius: 24px;
  position: relative;
  .teacher-avatar {
    width: 120px;
    height: 120px;
    border: 0.769231px solid #222222;
    filter: drop-shadow(3.07692px 3.07692px 0px #222222);
    border-radius: 352.687px;
    overflow: hidden;
    position: absolute;
    top: -68px;
    left: 50%;
    transform: translateX(-50%);
  }
  .desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    -webkit-line-clamp: 2;
    color: ${colors.text.light};
  }
  .content-top {
    border-bottom: 1px solid ${colors.common.black};
    padding-bottom: 16px;
  }
`
const StyledSlider = styled(Slider)`
  margin-top: 89px;
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

export const TeacherSection: React.FC = () => {
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
  const teacherList = [
    {
      avatar: '/images/teacher-image-1.jpg',
      name: 'Lea Morgan',
      experience: '10 năm',
      accent: 'Chuẩn bản ngữ',
      desc: 'Tôi là giáo viên tiếng Anh có kinh nghiệm lâu năm trong lĩnh vực giảng ...',
      price: ' 1.440.000đ',
      nationalCode: 'gb',
      rating: '5.0',
      curentSlot: '3',
    },
    {
      avatar: '/images/teacher-image-2.jpg',
      name: 'Natasa Balaz',
      experience: '6 năm',
      accent: 'Chuẩn bản ngữ',
      desc: 'Tôi luôn cố gắng tìm cách tạo ra một môi trường học tập thoải mái, thân thiện và hấp dẫn để các ...',
      price: '1.080.000đ',
      nationalCode: 'ca',
      rating: '4.9',
      curentSlot: '6',
    },
    {
      avatar: '/images/teacher-image-3.jpg',
      name: 'David',
      experience: '10 năm',
      accent: 'Chuẩn bản ngữ',
      desc: 'Đối với tôi, học viên sẽ không chỉ được học tiếng Anh mà còn được khuyến khích phát triển ...',
      price: '720.000đ',
      nationalCode: 'tr',
      rating: '4.8',
      curentSlot: '9',
    },
  ]
  return (
    <Wrapper id="teacher">
      <Container>
        <div className="w-[280px] md:w-full">
          <HeadingOfSection>Đội ngũ giảng viên tại WOO Group Kids</HeadingOfSection>
        </div>
        <p className="f14Regular text-text-light">
          Mở khóa kỹ năng tiếng anh của con với đội ngũ giáo viên chuyên nghiệp trong và ngoài nước
        </p>
      </Container>
      <div className="overflow-hidden">
        <StyledSlider {...settings}>
          {teacherList.map((item) => {
            const { name, accent, desc, experience, nationalCode, price, rating, avatar, curentSlot } = item
            return (
              <TeacherCard>
                <div className="teacher-avatar">
                  <img src={avatar} />
                </div>
                <div className="flex flex-col gap-2 content-top">
                  <div className="flex justify-between">
                    <Link href="/teachers/1">
                      <span className="cursor-pointer hover:underline hover:text-text-light f18Bold mr-1">{name}</span>
                    </Link>
                    <span className={`fi fi-${nationalCode}`} />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="f18Regular text-text-main mr-1">Kinh nghiệm:</span>
                      <span className="f18Regular text-text-light">{experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon />
                      <span>{rating}</span>
                    </div>
                  </div>
                  <div>
                    <span className="f18Regular text-text-main mr-1">Giọng:</span>
                    <span className="f18Regular text-text-light">{accent}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon />
                    <span className="f18Regular text-green">Còn trống {curentSlot} lớp</span>
                  </div>
                  <p className="desc">{desc}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="f14Regular">Học phí tháng:</p>
                  <p className="text-base font-semibold text-red">{price}</p>
                </div>
              </TeacherCard>
            )
          })}
        </StyledSlider>
      </div>
    </Wrapper>
  )
}
