import { Component } from 'react'
import Head from '~/components/head'
import {
  Sample1,
  Sample2,
  Sample3,
  Sample4
} from '~/components/views/tags/input_date_lab/input_variation'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab - input variation - ',
      description: 'input date lab - input variation - Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>{this.props.title}</h1>
        <h2>{`input[type="text"]`}</h2>
        <Sample1 />
        <h2>{`input[type="number"]`}</h2>
        <Sample2 />
        <h2>{`input[type="tel"]`}</h2>
        <Sample3 />
        <h2>{`input[type="date"]`}</h2>
        <Sample4 />
      </>
    )
  }
}

export default Page
