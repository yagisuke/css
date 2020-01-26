import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/tags/input_date_lab/vs_selectbox'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab - vs selectbox - ',
      description: 'input date lab - vs selectbox - Sample.'
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
