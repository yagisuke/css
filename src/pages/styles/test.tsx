import { Component } from 'react'
import Link from 'next/link'
import Head from '~/components/head'
import Hello from '~/components/hello'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'style',
      description: 'style'
    }
  }
  render() {
    return (
      <div>
        <Head title={this.props.title} description={this.props.description} />
        <Link href="/styles/test">
          <a>
            <Hello />
          </a>
        </Link>
      </div>
    )
  }
}

export default Page
