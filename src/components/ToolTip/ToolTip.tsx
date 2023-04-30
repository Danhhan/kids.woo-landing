import { Tooltip as ReactTooltip } from 'react-tooltip'

const ToolTip = ({anchorId, place, content, children}) => {
  return (
    <>
      {children}
      <ReactTooltip anchorId={anchorId} place={place} content={content} />
    </>
  )
}
export default ToolTip;