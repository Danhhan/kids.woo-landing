import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.65454 1.5C3.52193 1.5 3.39476 1.55268 3.30099 1.64645C3.20722 1.74021 3.15454 1.86739 3.15454 2C3.15454 2.13261 3.20722 2.25979 3.30099 2.35355C3.39476 2.44732 3.52193 2.5 3.65454 2.5V13.5H3.15454C3.02193 13.5 2.89476 13.5527 2.80099 13.6464C2.70722 13.7402 2.65454 13.8674 2.65454 14C2.65454 14.1326 2.70722 14.2598 2.80099 14.3536C2.89476 14.4473 3.02193 14.5 3.15454 14.5H14.1545C14.2871 14.5 14.4143 14.4473 14.5081 14.3536C14.6019 14.2598 14.6545 14.1326 14.6545 14C14.6545 13.8674 14.6019 13.7402 14.5081 13.6464C14.4143 13.5527 14.2871 13.5 14.1545 13.5H13.6545V2.5C13.7871 2.5 13.9143 2.44732 14.0081 2.35355C14.1019 2.25979 14.1545 2.13261 14.1545 2C14.1545 1.86739 14.1019 1.74021 14.0081 1.64645C13.9143 1.55268 13.7871 1.5 13.6545 1.5H3.65454ZM6.65454 4C6.52193 4 6.39476 4.05268 6.30099 4.14645C6.20722 4.24021 6.15454 4.36739 6.15454 4.5C6.15454 4.63261 6.20722 4.75979 6.30099 4.85355C6.39476 4.94732 6.52193 5 6.65454 5H7.65454C7.78715 5 7.91433 4.94732 8.00809 4.85355C8.10186 4.75979 8.15454 4.63261 8.15454 4.5C8.15454 4.36739 8.10186 4.24021 8.00809 4.14645C7.91433 4.05268 7.78715 4 7.65454 4H6.65454ZM6.15454 6.5C6.15454 6.36739 6.20722 6.24022 6.30099 6.14645C6.39476 6.05268 6.52193 6 6.65454 6H7.65454C7.78715 6 7.91433 6.05268 8.00809 6.14645C8.10186 6.24022 8.15454 6.36739 8.15454 6.5C8.15454 6.63261 8.10186 6.75979 8.00809 6.85355C7.91433 6.94732 7.78715 7 7.65454 7H6.65454C6.52193 7 6.39476 6.94732 6.30099 6.85355C6.20722 6.75979 6.15454 6.63261 6.15454 6.5ZM6.65454 8C6.52193 8 6.39476 8.05268 6.30099 8.14645C6.20722 8.24022 6.15454 8.36739 6.15454 8.5C6.15454 8.63261 6.20722 8.75979 6.30099 8.85355C6.39476 8.94732 6.52193 9 6.65454 9H7.65454C7.78715 9 7.91433 8.94732 8.00809 8.85355C8.10186 8.75979 8.15454 8.63261 8.15454 8.5C8.15454 8.36739 8.10186 8.24022 8.00809 8.14645C7.91433 8.05268 7.78715 8 7.65454 8H6.65454ZM9.15454 4.5C9.15454 4.36739 9.20722 4.24021 9.30099 4.14645C9.39476 4.05268 9.52193 4 9.65454 4H10.6545C10.7871 4 10.9143 4.05268 11.0081 4.14645C11.1019 4.24021 11.1545 4.36739 11.1545 4.5C11.1545 4.63261 11.1019 4.75979 11.0081 4.85355C10.9143 4.94732 10.7871 5 10.6545 5H9.65454C9.52193 5 9.39476 4.94732 9.30099 4.85355C9.20722 4.75979 9.15454 4.63261 9.15454 4.5ZM9.65454 6C9.52193 6 9.39476 6.05268 9.30099 6.14645C9.20722 6.24022 9.15454 6.36739 9.15454 6.5C9.15454 6.63261 9.20722 6.75979 9.30099 6.85355C9.39476 6.94732 9.52193 7 9.65454 7H10.6545C10.7871 7 10.9143 6.94732 11.0081 6.85355C11.1019 6.75979 11.1545 6.63261 11.1545 6.5C11.1545 6.36739 11.1019 6.24022 11.0081 6.14645C10.9143 6.05268 10.7871 6 10.6545 6H9.65454ZM9.15454 8.5C9.15454 8.36739 9.20722 8.24022 9.30099 8.14645C9.39476 8.05268 9.52193 8 9.65454 8H10.6545C10.7871 8 10.9143 8.05268 11.0081 8.14645C11.1019 8.24022 11.1545 8.36739 11.1545 8.5C11.1545 8.63261 11.1019 8.75979 11.0081 8.85355C10.9143 8.94732 10.7871 9 10.6545 9H9.65454C9.52193 9 9.39476 8.94732 9.30099 8.85355C9.20722 8.75979 9.15454 8.63261 9.15454 8.5ZM6.65454 13V11.5C6.65454 11.3674 6.70722 11.2402 6.80099 11.1464C6.89476 11.0527 7.02193 11 7.15454 11H10.1545C10.2871 11 10.4143 11.0527 10.5081 11.1464C10.6019 11.2402 10.6545 11.3674 10.6545 11.5V13C10.6545 13.1326 10.6019 13.2598 10.5081 13.3536C10.4143 13.4473 10.2871 13.5 10.1545 13.5H7.15454C7.02193 13.5 6.89476 13.4473 6.80099 13.3536C6.70722 13.2598 6.65454 13.1326 6.65454 13Z"
        fill="white"
      />
    </Svg>
  )
}

export default Icon
