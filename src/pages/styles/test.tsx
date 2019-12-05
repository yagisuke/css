import { Component } from 'react'
import Head from '~/components/head'

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
      </div>
    )
  }
}

export default Page
