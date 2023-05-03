import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

const Wrapper = styled.div``

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
`
const Item = styled.div<{bg}>`
  margin-top: 12px;
  padding: 8px;
  background: ${({bg}) => `${bg}`};
  margin-left: 16px;
  width: calc(50% - 16px);
  border: 1px solid #222222;
  box-shadow: 4px 4px 0px #222222;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  .name {
    background-color: ${colors.common.white};
    border: 1px solid #083d77;
    box-shadow: 2px 2px 0px #083d77;
    border-radius: 6px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .hour {
    font-weight: 500;
  }
  ${media.lg`
    width: unset;
    flex: 1 1 0%;
    font-size: 20px;
    .name {
      padding: 12px 0;
    }
  `}
`

export const IELTSProgram: React.FC = () => {
  const generalList = [
    {
      name: 'IELTS 4.0 - 5.0',
      hours: '120 giờ',
    },
    {
      name: 'IELTS 5.5 - 6.5',
      hours: '120 giờ',
    },
    {
      name: 'IELTS 6.5 - 7.5',
      hours: '180 giờ',
    },
    {
      name: 'IELTS 7.5 - 8.5',
      hours: '240 giờ',
    }
  ]
  return (
    <Wrapper>
      <p className="f16Bold uppercase text-text-light mt-4">general</p>
      <ItemList>
        {generalList.map((item, index) => {
          const { name, hours } = item
          return (
            <Item key={index} bg="#00FFE0;">
              <p className="name">{name}</p>
              <p className="hour">{hours}</p>
            </Item>
          )
        })}
      </ItemList>
      <p className="f16Bold uppercase text-text-light mt-4">ACADEMIC</p>
      <ItemList>
        {generalList.map((item, index) => {
          const { name, hours } = item
          return (
            <Item key={index} bg="#FFDA57">
              <p className="name">{name}</p>
              <p className="hour">{hours}</p>
            </Item>
          )
        })}
      </ItemList>
    </Wrapper>
  )
}
