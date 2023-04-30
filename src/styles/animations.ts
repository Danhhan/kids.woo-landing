import { Keyframes, keyframes } from 'styled-components'

export const floatingAnim = (x: string, y: string): Keyframes => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(${x}, ${y});
  }
  to {
    transform: translate(0, 0px);
  }
`

export const pulseLight = (): Keyframes => keyframes`
  0% {
    box-shadow: 0px -30px 60px 20px rgba(247, 198, 227, 0.5);
  }
  
  50% {
    box-shadow: 0px -30px 100px 40px rgba(247, 198, 227, 0.8);
  }
  
  100% {
    box-shadow: 0px -30px 60px 20px rgba(247, 198, 227, 0.5);
  }
`

export const cloudAnim = (): Keyframes => keyframes`
  0% {
    margin-left: -1000px;
  }
  100% {
    margin-left: 100%;
  }
`
