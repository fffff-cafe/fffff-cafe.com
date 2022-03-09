import React, { ReactElement } from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import "assets/styles.scss"

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>FFFFF Cafe - 作業できるカフェ@神田</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
