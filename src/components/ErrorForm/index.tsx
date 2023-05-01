import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { IErrorForm } from 'types/IErrorForm'

const StyledErrorForm = styled.div`
  color: ${colors.red};
  border-radius: 4px;
  border: 1px solid ${colors.red};
  padding: 10px 14px;
  background: #ffecec;
`

interface ErrorFormProps {
  error: IErrorForm
}

const ErrorForm: React.FC<ErrorFormProps> = ({ error }) => {
  const { code, message } = error
  return (
    <StyledErrorForm>
      <div className="flex flex-row">
        <div>
          <b>{code}</b>&nbsp;-&nbsp;
        </div>
        <div>{message}</div>
      </div>
    </StyledErrorForm>
  )
}

export default ErrorForm
