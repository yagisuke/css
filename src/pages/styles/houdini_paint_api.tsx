import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/styles/houdini_paint_api'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'Paint API',
      description: 'Paint API Sample.'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>Paint API</h1>
        <Sample1 />
        {/* https://sbfl.net/blog/2018/01/30/css-paint-api/ */}
        {/* https://ics.media/entry/18733/ */}
        {/* https://www.mitsue.co.jp/knowledge/blog/frontend/201804/12_1636.html */}
      </>
    )
  }
}

export default Page
