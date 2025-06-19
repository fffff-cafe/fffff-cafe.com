import React, { ReactElement } from "react"
import Head from "next/head"
import "assets/styles.css"
import Header from "components/header"

const GA_TRACKING_ID = "G-6XHCCTWXQQ"

const title = "FFFFF Cafe - 作業できるカフェ@秋葉原"
const description =
  "秋葉原駅3分にある作業のできる電源・Wi-Fi完備の喫茶店です。1ドリンク500円からご利用できます。"
const Layout = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <>
      <html lang="ja">
        <Head>
          <>
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
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
            `,
              }}
            />
          </>
        </Head>
        <body style={{ margin: 0 }}>
          {children}
          <Header />
        </body>
      </html>
    </>
  )
}

export default Layout
