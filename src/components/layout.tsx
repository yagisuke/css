import { NextComponentType } from 'next'
import Link from 'next/link'
import { Html, Head, Main, NextScript } from 'next/document'
import styled from 'styled-components'

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
      <Footer>
        <a href="https://twitter.com/yagi_suke" target="_blank" rel="noopener noreferrer">
          ©2019 yagisuke
        </a>
      </Footer>
      <NextScript />
    </body>
  </Html>
)

export default Layout

const Footer = styled.footer`
  margin-top: 80px;
  padding: 40px 16px;
  border-top: 1px solid #2c8898;
  text-align: right;
`
