import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#192435"
        fillRule="evenodd"
        d="M17.976 9.22a1.25 1.25 0 0 0-1.757-.196L12 12.399 7.78 9.024a1.25 1.25 0 1 0-1.56 1.952l5 4a1.25 1.25 0 0 0 1.56 0l5-4a1.25 1.25 0 0 0 .196-1.757Z"
        clipRule="evenodd"
       />
    </Svg>
  )
}

export default Icon
