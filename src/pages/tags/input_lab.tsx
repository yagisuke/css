import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/tags/input_lab'

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
      </>
    )
  }
}

export default Page
