import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import { media } from 'styles/media'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
`
const Item = styled.div`
  margin-top: 16px;
  padding: 4px 4px 8px 4px;
  background: #ffea00;
  margin-left: 16px;
  width: calc(25% - 16px);
  border: 1px solid #222222;
  box-shadow: 4px 4px 0px #222222;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  .name {
    background-color: ${colors.common.white};
    border: 1px solid #083d77;
    box-shadow: 2px 2px 0px #083d77;
    border-radius: 6px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .hour {
    font-weight: 500;
  }
  ${media.lg`
    padding: 8px;
    width: unset;
    flex: 1 1 0%;
    font-size: 20px;
    .name {
      margin-bottom: 10px;
    }
  `}
`

export const CambridgeProgram: React.FC = () => {
  const itemList = [
    {
      name: 'Starters',
      hours: '120 giờ',
    },
    {
      name: 'Mover',
      hours: '120 giờ',
    },
    {
      name: 'Flyer',
      hours: '120 giờ',
    },
    {
      name: 'KET',
      hours: '60 giờ',
    },
    {
      name: 'PET',
      hours: '180 giờ',
    },
    {
      name: 'FCE',
      hours: '180 giờ',
    },
    {
      name: 'CAE',
      hours: '240 giờ',
    },
    {
      name: 'CPE',
      hours: '240 giờ',
    },
  ]
  return (
    <Wrapper>
      {itemList.map((item, index) => {
        const { name, hours } = item
        return (
          <Item key={index}>
            <p className="name">{name}</p>
            <p className="hour">{hours}</p>
          </Item>
        )
      })}
    </Wrapper>
  )
}
