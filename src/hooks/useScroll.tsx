import { useEffect } from 'react'

interface Props {
  elementId: string
  pageYOffset: number
}
const useScroll = ({ elementId, pageYOffset }: Props) => {
  const handleScroll = () => {
    const tabsWrapper: HTMLElement = document.getElementById(elementId)
    if (window.pageYOffset >= pageYOffset) {
      tabsWrapper.classList.add('fixed')
    } else {
      tabsWrapper.classList.remove('fixed')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useScroll
