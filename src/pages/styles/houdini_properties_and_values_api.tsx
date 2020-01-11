import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/styles/houdini_properties_and_values_api'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'Properties & Values API',
      description: 'Properties & Values API Sample.'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>Properties &amp; Values API</h1>
        <h2>invalid</h2>
        <Sample1 />
        <h2>valid</h2>
        <Sample2 />
      </>
    )
  }
}

export default Page
