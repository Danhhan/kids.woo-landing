import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'

const PageMeta: React.FC<{ data? }> = ({ data }) => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const { pathname } = useRouter()

  // const pageMeta = getCustomMeta(pathname, t, locale) || {}
  // const { title, description, image } = { ...DEFAULT_META, ...pageMeta }

  return (
    <Head>
      {/* <title>""</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {data.map((item) => (
        <meta
          key={item?.attributes?.property}
          property={item?.attributes?.property}
          content={item?.attributes?.content}
        />
      ))} */}
    </Head>
  )
}

export default PageMeta
