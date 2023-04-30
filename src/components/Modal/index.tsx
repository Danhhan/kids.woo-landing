import Overlay from 'components/Overlay'
import { CloseIcon } from 'components/Svg'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { FC, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import getPortalRoot from 'utils/getPortalRoot'

const StyledModal = styled.div`
  background-color: ${colors.common.white};
  position: relative;
  transition: opacity 0.4s ease-in-out;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.1);
  // padding: 20px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  z-index: 9;
  visibility: hidden;
  opacity: 0;
  &.opened {
    visibility: visible;
    opacity: 1;
  }

  .modal-content {
    block-size: 100%;
    overflow: hidden auto;
  }
  width: 567px;
  // height: 406px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 7;
`

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 75px;
`
const ModalBody = styled.div`
  block-size: 100%;
  overflow-y: hidden;
`

interface ModalProps {
  onClose: () => void
  height?: string
  width?: string
  content?: React.ReactNode
  title?: React.ReactNode
  hasHeader?: boolean
  isOpen?: boolean
}

const Modal: FC<ModalProps> = ({ onClose, content, title, hasHeader = false, isOpen }) => {
  const ref = useRef<HTMLDivElement>(null)
  const portal = getPortalRoot()
  // if (portal)
  //   return createPortal(
  //     <>
  //       <>
  //         <Overlay isUnmounting={!isOpen}>
  //           <StyledModal id="modal">
  //             {hasHeader && (
  //               <ModalHeader>
  //                 {title}
  //                 <button onClick={onClose} className="absolute top-0 right-0">
  //                   <CloseIcon width="24px" height="24px" color={colors.common.black} />
  //                 </button>
  //               </ModalHeader>
  //             )}
  //             <ModalBody>
  //               <div className="modal-content">{content}</div>
  //             </ModalBody>
  //           </StyledModal>
  //         </Overlay>
  //       </>
  //     </>,
  //     portal,
  //   )
  // return null
  useOnClickOutside(ref, onClose)
  if (portal)
    return createPortal(
      <>
        <Overlay isUnmounting={!isOpen} />
        <StyledModal ref={ref}>
          <p>MODAL</p>
        </StyledModal>
      </>,
      portal,
    )
  return null
}

export default Modal
