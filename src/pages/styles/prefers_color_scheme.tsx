import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/styles/prefers_color_scheme'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '@media (prefers-color-scheme)',
      description: '@media (prefers-color-scheme) Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>@media (prefers-color-scheme)</h1>
        <Sample1 />
        <h2>Reference</h2>
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
      </>
    )
  }
}

export default Page
