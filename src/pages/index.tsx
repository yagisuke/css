import { Component } from 'react'
import Head from '~/components/head'
import { CssMenu } from '~/components/views/index'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '',
      description: '$ ls CSS'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <CssMenu />
      </>
    )
  }
}

export default Page
