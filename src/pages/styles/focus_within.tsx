import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/styles/focus_within'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: ':focus-within',
      description: ':focus-within Examples.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>:focus-within</h1>
        <Sample1 />
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/:focus-within"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.mozilla.org/ja/docs/Web/CSS/:focus-within
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Page
