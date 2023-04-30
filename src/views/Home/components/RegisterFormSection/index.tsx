import { Container } from 'components/Layout'
import { CloseIcon, MinusIcon, PlusIcon } from 'components/Svg'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

const Wrapper = styled.div`
  background-color: #fff1d7;
  padding: 24px 0;
  ${media.md`
    padding: 40px 0 82px 0;
  `}
`
const StyledForm = styled.form`
  margin-top: 13.5px;
  padding: 16px;
  background-color: ${colors.primary.dark2};
  box-shadow: 5.06264px 5.06264px 0px #222222;
  border-radius: 12px;
  text-align: center;
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
      padding: 12px 8px;
      outline: none;
      border: none;
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
  ${media.md`
    width: 679px;
    margin-left: auto;
    margin-right: auto;
  `}
`

export const RegisterFormSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h2 className="uppercase f18Bold md:text-4xl text-orange md:text-center">ĐĂNG KÝ TƯ VẤN VÀ HỌC THỬ MIỄN PHÍ</h2>
        <StyledForm>
          <div className="icon-group flex flex-1 gap-[7px]">
            <CloseIcon />
            <MinusIcon />
            <PlusIcon />
          </div>
          <div className="flex flex-col gap-[10px] content">
            <div className="flex-1">
              <input placeholder="Họ và tên phụ huynh" />
            </div>
            <div className="flex-1">
              <input placeholder="Họ và tên học sinh" />
            </div>
            <div className="flex-1">
              <input placeholder="Email của phụ huynh" />
            </div>
            <div className="flex-1">
              <input placeholder="Bé hiện mấy tuổi" />
            </div>
          </div>
          <button>Gửi thông tin ngay</button>
          <p className="f12Regular mt-4 italic">Chuyên viên tư vấn sẽ liên hệ và hỗ trợ ngay</p>
        </StyledForm>
      </Container>
    </Wrapper>
  )
}
