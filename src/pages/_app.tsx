import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import 'react-tooltip/dist/react-tooltip.css'
import 'styles/css/tailwind.css'

import { LanguageProvider } from 'contexts/Localization'
import { sizes } from 'styles/media'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ResetCSS } from 'styles/ResetCss'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Footer } from 'components/Footer'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import FacebookPixel from '../FacebookPixel'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

// const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? ErrorBoundary : Fragment

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}
const { publicRuntimeConfig } = getConfig()
const FB_PIXEL_ID = publicRuntimeConfig.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  const isMounted = useIsMounted()
  return (
    <>
      {isMounted && (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </>
      )}
    </>
  )
}

const MyApp: React.FC<AppProps> = (props) => {
  const theme = {
    breakpoints: [sizes.sm, sizes.md, sizes.lg, sizes.xl, sizes.xxl],
  }
  const { pageProps } = props

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta property="og:title" content="WOO GROUP | Học tiếng anh 1 kèm 1" />
        <meta name="description" content="WOO Group tồn tại và phát triển với hệ giá trị cốt lõi: Tử Tế - Tận Tâm - Trách nhiệm." />
        <meta property="og:description" content="WOO Group tồn tại và phát triển với hệ giá trị cốt lõi: Tử Tế - Tận Tâm - Trách nhiệm." />
        <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1oOf-WbMChFxFstsL5QIihRHx1DC9gr-z" />
        <meta property="og:url" content="https://kids.woogroup.vn/" />
        <link rel="canonical" href="https://kids.woogroup.vn/" />
        <meta name="keywords" content="Học tiếng Anh online, Tiếng Anh cho người đi làm, tiếng anh chuyên ngành, Tiếng anh cho trẻ em, Học tiếng anh 1 kèm 1, Học tiếng anh 1 kèm 1 cho bé, Học tiếng anh 1 kèm 1 cho trẻ, Học tiếng anh 1-1, học tiếng anh trực tuyến với người nước ngoài, học tiếng anh trực tuyến với người bản xứ" data-rh="true" />


        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <FacebookPixel />
      </Head>

      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <LanguageProvider>
              <ResetCSS />
              <App {...props} />
            </LanguageProvider>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
