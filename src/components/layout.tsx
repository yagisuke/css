import { NextComponentType } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

const Layout: NextComponentType = () => (
  <Html lang="ja">
    <Head>
      <title>CSS</title>
      <meta name="description" content="CSS" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Layout
