import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/tags/input_date_lab/vs_selectbox'

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
        <h2>{`input[type="tel"]`}</h2>
        <Sample1 value="" />
        <h2>Selectbox</h2>
        <Sample2 value="" minAge={8} maxAge={120} />
      </>
    )
  }
}

export default Page
