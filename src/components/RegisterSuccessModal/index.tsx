import Button from 'components/Button'
import { Modal } from 'components/Modal'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 96px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  width: 335px;
  z-index: 20;
  overflow: hidden;
`
const ModalContent = styled.div``
const StyledButton = styled(Button)`
  background-color: ${colors.green4};
  color: ${colors.common.white};
  padding: 12px 32px;
  border-radius: 8px;
  margin: 0 auto;
`
interface Props {
  isOpenModal: boolean
  onClose: () => void
}
export const RegisterSuccessModal: React.FC<Props> = ({ isOpenModal, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpenModal}>
        <Wrapper>
          <ModalContent>
            <div className="bg-success">
              <img src="/images/bg-success-modal.png" />
            </div>
            <div className="p-6">
              <h4 className="f18Regular w-[90%]">Chúc mừng bạn đã gửi thông tin thành công</h4>
              <p className="text-text-light mt-4">Đội ngũ tư vấn của WOO Group sẽ liên hệ với bạn ngay.</p>
              <div className="text-center mt-6">
                <StyledButton onClick={onClose}>Đóng</StyledButton>
              </div>
            </div>
          </ModalContent>
        </Wrapper>
      </Modal>
    </>
  )
}
