import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/tags/input_date_lab/result'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab - result - ',
      description: 'input date lab - result - Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>{this.props.title}</h1>
        <Sample1 value="" />
      </>
    )
  }
}

export default Page
