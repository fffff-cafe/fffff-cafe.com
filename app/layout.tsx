import React, { ReactElement } from "react"
import { Metadata, Viewport } from "next"
import Script from "next/script"
import "@fontsource/noto-sans-jp/400.css"
import "@fontsource/noto-sans-jp/700.css"
import "@fontsource/noto-sans-jp/900.css"
import "assets/styles.css"
import Header from "components/header"
import FooterSection from "components/footer-section"
import { jsonLd, siteDescription, siteName, siteUrl } from "utils/info"

const GA_TRACKING_ID = "G-6XHCCTWXQQ"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FFFFF Cafe - 秋葉原の作業できるカフェ・コワーキングスペース",
    template: "%s | FFFFF Cafe",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName,
    url: "/",
    images: [{ url: "/images/cover.jpg", width: 1024, height: 512 }],
  },
  twitter: { card: "summary_large_image", site: "@fffff_cafe" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
}

const Layout = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <html lang="ja">
      <body>
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        <Header />
        <main id="main">{children}</main>
        <FooterSection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  )
}

export default Layout
