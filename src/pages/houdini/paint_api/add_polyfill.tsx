import { Component } from 'react'
import Head from '~/components/head'
import View from '~/components/views/houdini/paint_api/add_polyfill'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '',
      description: '$ ls CSS | Houdini > Paint API > Add Polyfill'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <View />
      </>
    )
  }
}

export default Page
