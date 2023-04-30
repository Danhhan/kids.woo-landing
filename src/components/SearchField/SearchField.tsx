import { SearchIcon } from 'components/Svg'
import styled from 'styled-components'
import { Box } from '../Box'

const Wrapper = styled(Box)`
  position: relative;
  input {
    background-color: #FAFAFA;
    width: 100%;
    padding: 8px 40px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #C2C2C2;
  }
`

const StyledIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
`

const SearchField = ({ placeholder, onChange }) => {
  return (
    <Wrapper>
      <input placeholder={placeholder} onChange={onChange} />
      <StyledIcon color="#343741" />
    </Wrapper>
  )
}

export default SearchField
