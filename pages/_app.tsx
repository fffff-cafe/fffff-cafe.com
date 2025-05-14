import React, { ReactElement } from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import "assets/styles.scss"

const title = "FFFFF Cafe - 作業できるカフェ@秋葉原"
const description =
  "秋葉原駅3分にある作業のできる電源・Wi-Fi完備の喫茶店です。1ドリンク500円からご利用できます。"
const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://fffff-cafe.com" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://fffff-cafe.com/images/cover.jpg"
        />
        <link rel="canonical" href="https://fffff-cafe.com" />
        <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
