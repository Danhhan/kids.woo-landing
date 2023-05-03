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
  const router = useRouter()
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(FB_PIXEL_ID)
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
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
        <meta name="description" content="Hello english web" />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content="Hello english web" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello english" />
        <title>WOO | học tiếng anh 1 kèm 1</title>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,600;1,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" />
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
