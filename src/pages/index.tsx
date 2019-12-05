import { Component } from 'react'
import Link from 'next/link'
import Head from '~/components/head'
import Hello from '~/components/hello'

type Props = {
  className?: string
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '',
      description: 'style'
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <Head title={this.props.title} description={this.props.description} />
        <Link href="/styles/test" prefetch={false}>
          <a>
            <Hello />
          </a>
        </Link>
      </div>
    )
  }
}

export default Page
