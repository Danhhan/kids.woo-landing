import { useCallback, useEffect, useState } from 'react'

export const useToggleModal = () => {
  const [isVisibleModal, setIsVisible] = useState(false)

  // const theme = useTheme()
  // const matchDownLg = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    document.body.style.position = 'relative';
    document.body.style.overflow = '';

    const modalOverlay = document.getElementById('modal-overlay')
    const modal = document.getElementById('modal')

    if (isVisibleModal) {
      modalOverlay?.classList.add('opened')
      modal?.classList.add('opened')
      // if (modal && matchDownLg) {
      //   const positionScroll = document.documentElement.scrollTop
      //   modal.style.bottom = `-${positionScroll}px`
      // }
      document.body.style.overflow = 'hidden';
    } else {
      modalOverlay?.classList.remove('opened')
      modal?.classList.remove('opened')

    }
    return () => {
      modalOverlay?.classList.remove('opened')
      modal?.classList.remove('opened')
      document.body.style.position = '';
    }
  }, [isVisibleModal])

  const onCloseModal = useCallback(() => {
    if (isVisibleModal) setIsVisible(false)
  }, [isVisibleModal])

  const onToggleModal = useCallback(() => {
    setIsVisible((prev) => !prev)
  }, [])

  return {
    isVisibleModal,
    onToggleModal,
    onCloseModal,
  }
}
