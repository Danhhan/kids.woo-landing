import { MenuLink } from 'config/types/menu'
import { useTranslation } from 'contexts/Localization'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { getActiveMenuItem } from './utitls'

export const useMenu = () => {
  const { t } = useTranslation()
  const { pathname, push } = useRouter()
  const onClickNavItem = useCallback((item: MenuLink) => {
    if (item?.isNewTab) {
      window.open(item.href)
    } else {
      push(item.href)
    }
  }, [])
  return { onClickNavItem }
}
