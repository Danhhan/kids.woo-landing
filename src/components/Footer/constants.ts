import { ContextApi } from 'contexts/Localization/types'
import generateUId from 'utils/generateUI'
import { Address, ServiceInfo, Social } from './types'

export const addressConfig: (t: ContextApi['t']) => Address[] = (t) => [
  {
    id: generateUId(),
    title: t('Địa chỉ: Tòa nhà hạng A Vincom Center Đồng Khởi, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh'),
  },
  {
    id: generateUId(),
    title: t('GPKD số 0317729987 cấp bởi Sở Kế Hoạch và Đầu Tư TP Hồ Chí Minh'),
  },
  {
    id: generateUId(),
    title: t('Điện thoại: 0788-24-28-79'),
  },
  {
    id: generateUId(),
    title: t('Email liên hệ: helloenglishxinchao@gmail.com'),
  }
]

export const serviceInfoConfig: (t: ContextApi['t']) => ServiceInfo[] = (t) => [
  {
    id: generateUId(),
    label: t('Terms of Use'),
    href: 'https://antoree.com/terms/terms-of-service',
  },
  {
    id: generateUId(),
    label: t('Privacy Policy'),
    href: 'https://antoree.com/terms/privacy-policy',
  },
  {
    id: generateUId(),
    label: t('Refund Policy'),
    href: 'https://antoree.com/terms/privacy-refund',
  },
  {
    id: generateUId(),
    label: 'Faqs',
    href: 'https://antoree.com/faqs',
  },
]
// contants
export const SOCIAL_LIST: Social[] = [
  {
    id: generateUId(),
    src: '/images/zalo.png',
    href: 'https://rd.zapps.vn/locked?pageId=269438753585304410',
  },
  {
    id: generateUId(),
    src: '/images/facebook.png',
    href: 'https://www.facebook.com/antoree.co',
  },
  {
    id: generateUId(),
    src: '/images/youtube.png',
    href: 'https://www.youtube.com/channel/UCFFoOzIv-jDYUNfrgx4KRkA',
  },
  {
    id: generateUId(),
    src: '/images/skype.png',
    href: 'skype:admin@antoree.com?chat',
  },
]
