import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/styles/prefers_reduced_motion'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '@media (prefers-reduced-motion)',
      description: '@media (prefers-reduced-motion) Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>@media (prefers-reduced-motion)</h1>
        <Sample1 />
        <h2>Reference</h2>
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
      </>
    )
  }
}

export default Page
