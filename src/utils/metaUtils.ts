import { ContextApi } from 'contexts/Localization/types'

const getPathList = (t: ContextApi['t']) => {
  return {
    '/': { title: t('Home') },
    '/teachers': { title: t('Teachers') },
  }
}
export const getCustomMeta = (path: string, t: ContextApi['t']) => {
  const pathList = getPathList(t)
  const pageMetaData = pathList[path]
  console.log('pageMetaData: ', pageMetaData);
}
