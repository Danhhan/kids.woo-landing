import { Box, BoxProps } from 'components/Box'
import { Text } from 'components/Text'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'styles/colors'
import { ArrowDownIcon } from '../Svg'

const DropDownHeader = styled.div`
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  transition: border-radius 0.15s;
  background: #fafafa;
  border: 1px solid #dedede;
`

const DropDownListContainer = styled.div`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;
  background: #fafafa;
  z-index: 2;
`

const DropDownContainer = styled(Box)<{ isOpen: boolean }>`
  cursor: pointer;
  width: 100%;
  position: relative;
  border-radius: 16px;
  /* height: 40px; */
  min-width: 136px;
  user-select: none;
  ${(props) =>
    props.isOpen &&
    css`
      ${DropDownHeader} {
        border-radius: 8px;
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        border-top-width: 0;
        border-radius: 8px;
        margin-top: 2px;
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: left;
`

const ListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
`

export interface SelectProps extends BoxProps {
  options: OptionProps[]
  onOptionChange?: (option: OptionProps) => void
  placeHolderText?: string
  defaultOptionIndex?: number
  valueOfSelect?: any
}

export interface OptionProps {
  label: string
  value: any
}

const Select: React.FunctionComponent<SelectProps> = ({
  options,
  onOptionChange,
  defaultOptionIndex = 0,
  placeHolderText,
  valueOfSelect,
  ...props
}) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(defaultOptionIndex)

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen)
    event.stopPropagation()
  }

  const onOptionClicked = (selectedIndex: number) => () => {
    setSelectedOptionIndex(selectedIndex)
    setIsOpen(false)
    setOptionSelected(true)

    if (onOptionChange) {
      onOptionChange(options[selectedIndex])
    }
  }

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <DropDownContainer ref={ref} isOpen={isOpen} {...props}>
      <DropDownHeader onClick={toggling}>
        <Text small color={!optionSelected && placeHolderText ? colors.text.light : undefined}>
          {(!optionSelected && placeHolderText) || !valueOfSelect
            ? placeHolderText
            : options[selectedOptionIndex].label}
        </Text>
      </DropDownHeader>
      <ArrowDownIcon color="text" onClick={toggling} />
      <DropDownListContainer>
        <DropDownList ref={dropdownRef}>
          {options.map((option, index) =>
            placeHolderText || index !== selectedOptionIndex ? (
              <ListItem onClick={onOptionClicked(index)} key={option.label}>
                <Text small>{option.label}</Text>
              </ListItem>
            ) : null,
          )}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  )
}

export default Select
