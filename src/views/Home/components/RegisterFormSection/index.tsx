import { Container } from 'components/Layout'
import { CircleCloseIcon, MinusIcon, PlusIcon } from 'components/Svg'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'
import Select from 'components/Select'
import { useMutation } from '@tanstack/react-query'
import { createContactFn } from 'apis/contact.api'
import { IContactInput } from 'types/IContact'
import { IErrorForm } from 'types/IErrorForm'
import { isAxiosError } from 'utils/helpers'
import { CONTACT_TYPE_KID, INTEREST_COURSE, UTM_ID_DEFAULT } from 'config/constants/contact'
import ErrorForm from 'components/ErrorForm'
import { RegisterSuccessModal } from 'components/RegisterSuccessModal'
import LoadingBtn from 'components/Button/LoadingBtn'
import { PHONE_REGEX } from 'config/constants/form/validation'
import moment from 'moment'

const Wrapper = styled.div`
  background-color: #fff1d7;
  padding: 24px 0;
  ${media.md`
    padding: 40px 0 82px 0;
  `}
  position: relative;
  .plane-img {
    display: none;
    position: absolute;
    width: 285.14px;
    bottom: 31px;
    left: 230px;
    ${media.xl`
      display: block;
    `}
  }
`
const StyledForm = styled.form`
  position: relative;
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
      padding: 12px 16px;
      outline: none;
      border: none;
      border: 1px solid #e6e8ef;
      border-radius: 8px;
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
    min-width: 283px;
  }
  ${media.md`
    width: 679px;
    margin-left: auto;
    margin-right: auto;
  `}
`

export const RegisterFormSection: React.FC = () => {
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false)
  // Submit contact Form
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
    control,
  } = useForm<IContactInput>()
  // API create contact Mutation
  const {
    mutate: createContact,
    isLoading,
    error,
  } = useMutation((contactData: IContactInput) => createContactFn(contactData), {
    onSuccess: () => {
      setIsOpenSuccessModal(true)
      reset()
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
  const onSubmit: SubmitHandler<IContactInput> = (data) => {
    createContact({ ...data, utm_id: UTM_ID_DEFAULT, type: CONTACT_TYPE_KID })
  }
  return (
    <Wrapper id="register-form">
      <div className="plane-img">
        <img src="/images/right-plane.png" />
      </div>
      <Container>
        <h2 className="uppercase f18Bold md:text-4xl text-orange md:text-center">ĐĂNG KÝ TƯ VẤN VÀ HỌC THỬ MIỄN PHÍ</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div className="icon-group flex flex-1 gap-[7px]">
            <CircleCloseIcon />
            <MinusIcon />
            <PlusIcon />
          </div>
          <div className="flex flex-col gap-[10px] content mb-4">
            <div className="flex-1">
              <input {...register('represent_name', { required: true })} placeholder="Họ và tên phụ huynh" />
              {errors.represent_name && (
                <div className="error msg" role="alert">
                  Vui lòng nhập thông tin của trường này!
                </div>
              )}
            </div>
            <div className="flex-1">
              <input {...register('child_name', { required: true })} placeholder="Họ và tên học sinh" />
            </div>
            <div className="flex-1">
              <input
                {...register('represent_phone', { pattern: PHONE_REGEX, required: true })}
                placeholder="Số điện thoại của phụ huynh"
              />
              {errors.represent_phone && (
                <div className="error msg" role="alert">
                  {errors.represent_phone?.type === 'required' && `Vui lòng nhập thông tin của trường này!`}
                  {errors.represent_phone?.type === 'pattern' && `Số điện thoại không hợp lệ!`}
                </div>
              )}
            </div>
            <div className="flex-1">
              <input type="number" min={1} max={100} {...register('child_age')} placeholder="Bé hiện mấy tuổi" />
            </div>
            <div className="flex-1">
              <Controller
                name="interest_course"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    placeHolderText="Phụ huynh quan tâm đến phát triển kỹ năng tiếng Anh nào của bé"
                    options={INTEREST_COURSE}
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
          <p className="f12Regular mt-4 italic">Chuyên viên tư vấn sẽ liên hệ và hỗ trợ ngay</p>
        </StyledForm>
      </Container>
      <RegisterSuccessModal isOpenModal={isOpenSuccessModal} onClose={() => setIsOpenSuccessModal(false)} />
    </Wrapper>
  )
}
