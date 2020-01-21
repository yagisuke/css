import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/styles/backdrop_filter'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input',
      description: 'input Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>input</h1>
        <Sample1 value="" />
        <br />
        <Sample2 />
      </>
    )
  }
}

export default Page
