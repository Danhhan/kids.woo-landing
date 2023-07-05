import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

import { colors } from 'styles/colors'
import { media } from 'styles/media'
// COMPs
import Button from 'components/Button'
import Select from 'components/Select'
import { CloseIcon } from 'components/Svg'
import { Modal } from 'components/Modal'
import { isAxiosError } from 'utils/helpers'
import { IErrorForm } from 'types/IErrorForm'
import { IContactInput } from 'types/IContact'
import { createContactFn } from 'apis/contact.api'
import { INTEREST_COURSE } from 'config/constants/contact'
import { RegisterSuccessModal } from 'components/RegisterSuccessModal'
import ErrorForm from 'components/ErrorForm'
import LoadingBtn from 'components/Button/LoadingBtn'
import { PHONE_REGEX } from 'config/constants/form/validation'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(289.54deg, rgba(255, 207, 39, 1) 1.48%, #ffbf00 99.1%);
  overflow: hidden;
  ${media.md`
    width: 816px;
    border: 1px solid #222222;
    box-shadow: 12px 12px 0px #222222;
    border-radius: 16px;
    height: 524px;
  `}
  z-index: 20;
  position: relative;
`
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 488px;
  ${media.md`
    padding: 32px;
    width: auto;
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
  `}
`
const CloseButton = styled(Button)`
  background: #fa6466;
  border: 0.75px solid #222222;
  box-shadow: 1px 1px 0px #222222;
  border-radius: 500px;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 6;
  right: 11px;
  top: 5px;
  ${media.lg`
    right: 16px;
    top: 16px;
  `}
`
const StyledForm = styled.form`
  margin-top: 24px;
  margin: 24px auto 0 auto;
  text-align: center;
  width: 334px;
  ${media.lg`
    padding-left: 12px;
  `}
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
      font-size: 14px;
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
    min-width: 205px;
  }
`

const MAX_SEC = 20

export const RegisterFormModal: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [timeLeft, setTimeLeft] = useState(MAX_SEC)
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false)

  const onClose = () => {
    setIsOpenModal(false)
    setTimeLeft(undefined)
  }
  useEffect(() => {
    if (timeLeft === 0) {
      setIsOpenModal(true)
      setTimeLeft(0)
    }
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
  }, [timeLeft])

  // API create contact Mutation
  const {
    mutate: createContact,
    isLoading,
    error,
  } = useMutation((contactData: IContactInput) => createContactFn(contactData), {
    onSuccess: (data) => {
      setIsOpenSuccessModal(true)
      setIsOpenModal(false)
    },
  })

  // Error handle
  const errorForm = useMemo(() => {
    if (isAxiosError<{ error: IErrorForm }>(error)) {
      return {
        error: {
          code: 500,
          message: 'Không thể đăng ký ngay lúc này! vui lòng thử lại sau!',
        },
      }
    }
    return undefined
  }, [error])

  // Submit contact Form
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IContactInput>()
  const onSubmit: SubmitHandler<IContactInput> = (data) => {
    createContact(data)
  }

  return (
    <>
      <Modal isOpen={isOpenModal}>
        <Wrapper>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <img className="absolute top-0 right-0" src="images/top-right-bg.png" />
          <img
            className="w-[240px] absolute bottom-0 left-0 hidden md:block"
            src="images/boy-with-books-showing-ok.png"
          />
          <ModalContent>
            <div className="relative z-[1] mb-4">
              <h2 className="f22Bold md:f24Bold uppercase text-blue1 text-center">Cho con học tiếng Anh chỉ từ</h2>
              <p className="font-extrabold text-red uppercase text-[33px] md:text-4xl text-center">99.000đ/giờ</p>
              <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-[10px] content">
                  <div className="flex-1">
                    <input {...register('represent_name', { required: true })} placeholder="Họ và tên" />
                    {errors.represent_name && (
                      <div className="error msg" role="alert">
                        Vui lòng nhập thông tin của trường này!
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      {...register('represent_phone', { pattern: PHONE_REGEX, required: true })}
                      placeholder="Số điện thoại"
                    />
                    {errors.represent_phone && (
                      <div className="error msg" role="alert">
                        {errors.represent_phone?.type === 'required' && `Vui lòng nhập thông tin của trường này!`}
                        {errors.represent_phone?.type === 'pattern' && `Số điện thoại không hợp lệ!`}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Controller
                      name="interest_course"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          placeHolderText="Bé cần được cải thiện kỹ năng nào?"
                          options={INTEREST_COURSE}
                          onOptionChange={(option) => {
                            onChange(option.value)
                          }}
                          valueOfSelect={value}
                        />
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <Controller
                      name="skill_improvement"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          placeHolderText="Khóa học tiếng Anh bé quan tâm"
                          options={[
                            {
                              label: 'Giao tiếp',
                              value: 'communication',
                            },
                            {
                              label: 'CEFR',
                              value: 'CEFR',
                            },
                            {
                              label: 'Cambridge',
                              value: 'Cambridge',
                            },
                            {
                              label: 'IELTS',
                              value: 'IELTS',
                            },
                          ]}
                          onOptionChange={(option) => {
                            onChange(option.value)
                          }}
                          valueOfSelect={value}
                        />
                      )}
                    />
                  </div>
                </div>
                {errorForm && <ErrorForm error={errorForm?.error} />}
                <button type="submit">
                  {!isLoading && <span className="uppercase">Gửi thông tin ngay</span>}
                  {isLoading && <LoadingBtn />}
                </button>
              </StyledForm>
            </div>
          </ModalContent>
        </Wrapper>
      </Modal>
      <RegisterSuccessModal isOpenModal={isOpenSuccessModal} onClose={() => setIsOpenSuccessModal(false)} />
    </>
  )
}
