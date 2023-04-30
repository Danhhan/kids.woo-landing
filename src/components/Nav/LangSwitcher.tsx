import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { Dropdown } from 'components/Dropdown'
import { languageList } from 'config/localization/languages'
import { Text } from 'components/Text'
import { colors } from 'styles/colors'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div`
  button {
    display: flex;
    align-items: center;
  }
  .lang-img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }
  .dropdown-item {
    cursor: pointer;
    height: 40px;
    padding: 8px;
    width: 100%;
  }
  .dropdown-content {
    border-radius: 4px;
    box-shadow: 0 22px 136px #72745b08, 0 2px 9px #72745b1f;
    padding: unset;
    width: 60px;
  }
  .lang-item {
    color: ${colors.text.main};
    cursor: pointer;
    display: flex;
    span {
      margin-right: 8px;
    }
    &:hover {
      color: ${colors.text.main};
    }
    padding: 8px;
  }
`

export const LangSwitcher: React.FC = () => {
  const { setLanguage, currentLanguage } = useTranslation()
  return (
    <Wrapper>
      <Dropdown
        target={
          <button className="dropdown-button">
            <img className="w-9 h-9" src="/images/flag-vi.png" />
          </button>
        }
      >
        {languageList.map((item) => {
          return (
            <Text onClick={() => setLanguage(item)} className="lang-item" textTransform="uppercase" key={item.code}>
              <span>{item.code}</span>
              {/* {currentLanguage.code === item.code && <CheckerIcon width={14} height={10} />} */}
            </Text>
          )
        })}
      </Dropdown>
    </Wrapper>
  )
}
