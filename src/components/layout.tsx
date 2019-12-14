import { NextComponentType } from 'next'
import Link from 'next/link'
import { Html, Head, Main, NextScript } from 'next/document'

const Layout: NextComponentType = () => (
  <Html lang="ja">
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css" />
      <style>
        {`
          :root {
            --theme-font: #0f0f0f;
            --theme-background: #ffffff;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --theme-font: #ffffff;
              --theme-background: #0f0f0f;
            }
          }

          body {
            word-break: break-word;
          }

          footer {
            margin-top: 80px;
            padding: 40px 16px;
            border-top: 1px solid #2c8898;
            text-align: right;
          }
          footer a {
            display: inline-block;
            margin-left: 16px;
          }
        `}
      </style>
    </Head>
    <body>
      <header>
        <h1>
          <Link href="/" prefetch={false}>
            <a>$ ls CSS</a>
          </Link>
        </h1>
      </header>
      <Main />
      <footer>
        <span>&copy;2019 yagisuke</span>
        <a href="https://twitter.com/yagi_suke" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/yagisuke/css" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
      <NextScript />
    </body>
  </Html>
)

export default Layout
