import { NextComponentType } from 'next'
import Link from 'next/link'
import { Html, Head, Main, NextScript } from 'next/document'

const Layout: NextComponentType = () => (
  <Html lang="ja">
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css" />
    </Head>
    <body>
      <h1>
        <Link href="/" prefetch={false}>
          <a>$ ls CSS</a>
        </Link>
      </h1>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Layout
