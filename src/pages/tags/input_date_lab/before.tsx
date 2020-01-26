import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/tags/input_date_lab/before'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab - before - ',
      description: 'input date lab - before - Sample.'
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
