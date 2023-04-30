import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/Layout'
import { HeadingOfSection } from '../HeadingOfSection'
import { media } from 'styles/media'
import { floatingAnim } from 'styles/animations'
import { CambridgeProgram } from './CambridgeProgram'
import { IELTSProgram } from './IELTSProgram'

const Wrapper = styled.div`
  position: relative;
  .paper-plane-wrap {
    width: 73px;
    position: absolute;
    top: 34px;
    right: 75px;
    ${media.md`
      top: 0;
      right: 36%;
    `}
    animation: ${floatingAnim('-10px', '-30px')} 3s ease-in-out infinite;
    animation-delay: 1s;
  }
`
const LevelList1 = styled.div`
  margin-top: 47px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  ${media.md`
    flex-direction: row;
    gap: 24px;
  `}
`
const LevelItem1 = styled.div`
  padding: 31px 0 8px;
  background: #dee7ff;
  border: 1px solid #121565;
  box-shadow: 6px 6px 0px #121565;
  border-radius: 12px;
  text-align: center;
  position: relative;
  .level-name {
    width: 60px;
    height: 60px;
    background: #5158fa;
    border: 1.125px solid #121565;
    box-shadow: 1.5px 1.5px 0px #121565;
    border-radius: 750px;
    font-weight: 800;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -32px;
  }
  .studying-hour {
    color: #5158fa;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }
`

const LevelList2 = styled.div`
  display: flex;
  gap: 12px;
  ${media.md`
    gap: 32px;
  `}
  align-items: flex-end;
  ${media.xlg`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
  `}
`
const ItemList = styled.div<{ bg }>`
  &.basic {
    height: 106px;
    ${media.md`
      height: 170px;
    `}
  }
  &.intermediate {
    height: 145px;
    ${media.md`
      height: 266px;
    `}
  }
  &.advance {
    ${media.md`
      height: 333px;
    `}
    height: 170px;
  }
  display: flex;
  gap: 8px;
  .item {
    flex: 1 1 0%;
    background-color: ${({ bg }) => `${bg}`};
    border: 1px solid #222222;
    box-shadow: 4px 4px 0px #222222;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 16px;
  }
`
const Group = styled.div<{ bg; color }>`
  flex: 1 1 0%;
  color: ${({ color }) => `${color}`};
  .group-name {
    background: ${({ bg }) => `${bg}`};
    border: 1px solid #222222;
    box-shadow: 4px 4px 0px #222222;
    border-radius: 8px;
    padding: 8px 0;
    ${media.md`
      padding: 16px 0;
    `}
    margin-top: 8px;
    text-align: center;
  }
`

export const RoadMapSection: React.FC = () => {
  const levelList1 = [
    {
      levelName: 'Pre 1',
      studyingHour: '120 giờ',
    },
    {
      levelName: 'a1',
      studyingHour: '120 giờ',
    },
    {
      levelName: 'a1',
      studyingHour: '120 giờ',
    },
    {
      levelName: 'a2',
      studyingHour: '120 giờ',
    },
    {
      levelName: 'b1',
      studyingHour: '120 giờ',
    },
    {
      levelName: 'b2',
      studyingHour: '120 giờ',
    },
  ]
  const levelList2 = [
    {
      className: 'basic',
      groupName: 'Căn bản',
      backgroundColor: '#F0CFFF',
      color: '#BC28FF',
      levels: [
        {
          name: 'a1',
          studyingHour: '120',
        },
        {
          name: 'a2',
          studyingHour: '120',
        },
      ],
    },
    {
      className: 'intermediate',
      backgroundColor: '#A4FFEF',
      color: '#068D76',
      groupName: 'Trung cấp',
      levels: [
        {
          name: 'b1',
          studyingHour: '180',
        },
        {
          name: 'b2',
          studyingHour: '180',
        },
      ],
    },
    {
      className: 'advance',
      backgroundColor: '#FFA4B4',
      color: '#FF1740',
      groupName: 'Cao cấp',
      levels: [
        {
          name: 'c1',
          studyingHour: '240',
        },
        {
          name: 'c2',
          studyingHour: '240',
        },
      ],
    },
  ]
  return (
    <Wrapper>
      <Container>
        <HeadingOfSection>Lộ trình học WOO Group Kids</HeadingOfSection>
        <p className="text-blue1 f18Bold">Lộ trình đào tạo CEFR tại WOO GROUP</p>
        <p className="f16Bold text-text-light"> Dành cho trẻ từ 5 - 12 tuổi</p>
        {/* <div className="paper-plane-wrap">
            <img src="images/paper-plane.png" />
          </div> */}
        <LevelList1>
          {levelList1.map((item, index) => {
            const { levelName, studyingHour } = item
            return (
              <LevelItem1 className="flex-1" key={index}>
                <div className="level-name">{levelName}</div>
                <div className="studying-hour">{studyingHour}</div>
              </LevelItem1>
            )
          })}
        </LevelList1>
        <p className="f16Bold text-text-light mt-[40px]"> Dành cho trẻ từ 12 - 18 tuổi</p>
        <LevelList2>
          {levelList2.map((item) => {
            const { color, backgroundColor, className, groupName, levels } = item
            return (
              <Group bg={backgroundColor} color={color}>
                <ItemList className={className} bg={backgroundColor}>
                  {levels.map((item) => {
                    const { name, studyingHour } = item
                    return (
                      <div className="item">
                        <p className="f18Bold uppercase">{name}</p>
                        <p className={`f14Regular`}>{studyingHour}</p>
                        <p className={`f14Regular`}>giờ</p>
                      </div>
                    )
                  })}
                </ItemList>
                <div className="group-name f16Bold">{groupName}</div>
              </Group>
            )
          })}
        </LevelList2>
        <p className="text-blue1 f18Bold mt-6">Lộ trình đào tạo CAMBRIDGE tại WOO GROUP</p>
        <CambridgeProgram />
        <p className="text-blue1 f18Bold mt-6">Lộ trình đào tạo IELTS tại WOO GROUP</p>
        <IELTSProgram />
      </Container>
    </Wrapper>
  )
}
