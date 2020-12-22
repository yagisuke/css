import { Component } from 'react'
import Head from '~/components/head'
import { HoudiniMenu } from '~/components/views/houdini/index'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '',
      description: '$ ls CSS | Houdini > Paint API > Ripple Animation'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <HoudiniMenu />
      </>
    )
  }
}

export default Page
