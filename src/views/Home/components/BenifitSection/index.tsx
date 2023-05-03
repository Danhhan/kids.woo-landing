import { Container } from 'components/Layout'
import { RegisterButton } from 'components/RegisterButton'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

const Wrapper = styled.div`
  padding: 24px;
  background-color: #feffe0;
`
export const BenifitSection: React.FC = () => {
  const itemList = [
    'Tự tin giao tiếp và sử dụng tiếng Anh',
    'Nuôi dưỡng niềm đam mê học tiếng Anh',
    'Khám phá những điều thú vị từ hành trình học tiếng Anh',
    'Nâng cao kỹ năng phát âm, Nghe - Nói - Đọc - Viết và kiến thức ngữ pháp',
    'Đáp ứng kiến thức và kỹ năng của các bài thi chuẩn quốc tế',
  ]
  const onScrollToView = useCallback((id: string) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }, [])
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="benifit-img flex-1 md:order-1">
            <img src="/images/benifit.png" />
          </div>
          <div className="mt-6 md:mt-0 flex-1">
            <h2 className="f24Bold text-orange mb-8">Đồng hành cùng WOO Group Kids, các con sẽ:</h2>
            {itemList.map((item) => {
              return (
                <div className="flex gap-2 items-center mb-4">
                  <img src="/images/multiple-star.png" />
                  <span>{item}</span>
                </div>
              )
            })}
            <div className="hidden md:block">
              <RegisterButton
                onClick={() => {
                  onScrollToView('#register-form')
                }}
              >
                <span className="uppercase">Đăng ký ngay cho con</span>
              </RegisterButton>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
