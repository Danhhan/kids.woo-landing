import styled from 'styled-components'
import { media } from 'styles/media'
import { Box, BoxProps } from '../Box'

const Wrapper = styled(Box)`
  margin-top: 24px;
  ${media.md`
    margin-top: 60px;
  `}
  ${media.lg`
    padding: 0 40px;
  `}
  ${media.xl`
    padding: 0 80px;
  `}
`
const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Wrapper px={['16px', '24px']} mx="auto" maxWidth="1440px" {...props}>
    {children}
  </Wrapper>
)

export default Container
