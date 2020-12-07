import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/tags/input_date_lab/adjust_input_date'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab - Adjust Input Date - ',
      description: 'input date lab - Adjust Input Date - Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>{this.props.title}</h1>
        <h2>Full width numbers</h2>
        <Sample1 />
        <h2>Automatically move focus</h2>
        <Sample2 />
      </>
    )
  }
}

export default Page
