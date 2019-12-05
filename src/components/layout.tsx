import { NextComponentType } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

const Layout: NextComponentType = () => (
  <Html lang="ja">
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/marx-css/css/marx.min.css" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Layout
