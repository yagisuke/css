import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/styles/is'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: ':is()',
      description: ':is() Examples.'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>:is()</h1>
        <Sample1 />
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/:is"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.mozilla.org/ja/docs/Web/CSS/:is
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Page
