import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const CircleCloseIcon: React.FC<SvgProps> = (props) => {
  const { color } = props
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M5.50459 0.504639C2.46055 0.504639 0 2.96519 0 6.00923C0 9.05326 2.46055 11.5138 5.50459 11.5138C8.54862 11.5138 11.0092 9.05326 11.0092 6.00923C11.0092 2.96519 8.54862 0.504639 5.50459 0.504639ZM8.25688 7.98537L7.48073 8.76152L5.50459 6.78537L3.52844 8.76152L2.75229 7.98537L4.72844 6.00923L2.75229 4.03308L3.52844 3.25693L5.50459 5.23308L7.48073 3.25693L8.25688 4.03308L6.28073 6.00923L8.25688 7.98537Z"
        fill={color || '#FA6466'}
      />
    </Svg>
  )
}

export default CircleCloseIcon
