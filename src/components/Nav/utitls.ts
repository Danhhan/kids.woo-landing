import { MenuLink } from 'config/types/menu'
import orderBy from 'lodash/orderBy'

export const getActiveMenuItem = ({ pathname, menuList }: { pathname: string; menuList: MenuLink[] }) =>
  menuList.find((menuItem) => pathname.startsWith(menuItem.href))

export const getActiveSubMenuItem = ({ pathname, menuItem }: { pathname: string; menuItem?: MenuLink }) => {
  //   const activeSubMenuItems = menuItem?.items.filter((subMenuItem) => pathname.startsWith(subMenuItem.href)) ?? []
  //   // Pathname doesn't include any submenu item href - return undefined
  //   if (!activeSubMenuItems || activeSubMenuItems.length === 0) {
  //     return undefined
  //   }
  //   // Pathname includes one sub menu item href - return it
  //   if (activeSubMenuItems.length === 1) {
  //     return activeSubMenuItems[0]
  //   }
  //   // Pathname includes multiple sub menu item hrefs - find the most specific match
  //   const mostSpecificMatch = orderBy(activeSubMenuItems, (subMenuItem) => subMenuItem.href.length, 'desc')[0]
  //   return mostSpecificMatch
}
