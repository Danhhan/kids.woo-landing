import styled from 'styled-components'
import { media } from 'styles/media'
import { Box, BoxProps } from '../Box'

const Wrapper = styled(Box)`
  padding-top: 60px;
  padding-bottom: 60px;
`

const SectionLayout: React.FC<BoxProps> = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>

export default SectionLayout
