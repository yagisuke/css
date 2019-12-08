import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/styles/media_prefers'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '@media(prefers-*)',
      description: '@media(prefers-*) Examples.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>@media(prefers-*)</h1>
        <h2>prefers-reduced-motion</h2>
        <Sample1 />
        <h3>Reference</h3>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-reduced-motion"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-reduced-motion
            </a>
          </li>
        </ul>
        <h2>prefers-color-scheme</h2>
        <Sample2 />
        <h3>Reference</h3>
        <ul>
          <li>
            <a
              href="https://blog.jxck.io/entries/2018-11-10/dark-mode-via-prefers-color-scheme.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://blog.jxck.io/entries/2018-11-10/dark-mode-via-prefers-color-scheme.html
            </a>
          </li>
        </ul>
        <h2>Comming Soon...</h2>
        <h3>prefers-constrast</h3>
        <p>prefers-contrast(high, low): コントラストの高低を要求する</p>
        <h3>prefers-reduced-transparency</h3>
        <p>prefers-reduced-transparency(reduce): 透過表現を減らす</p>
        <h3>forced-colors</h3>
        <h3>light-level</h3>
      </>
    )
  }
}

export default Page
