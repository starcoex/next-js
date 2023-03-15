import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

import { AppProps } from "next/dist/shared/lib/router/router"
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot, useRecoilState } from 'recoil'
import { ThemeProvider } from 'styled-components'
import "../styles/globals.css"


const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function _app({ Component, pagePros }: AppProps) {

  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Navbar />
        <Component {...pagePros}></Component>
        {/* <Providers /> */}

      </QueryClientProvider>
    </RecoilRoot >
  )
}
