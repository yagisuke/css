import { Component } from 'react'
import Head from '~/components/head'
import {
  Sample1,
  Sample2,
  Sample3,
  Sample4,
  Sample5,
  Sample6,
  Sample7
} from '~/components/views/tags/input_date_lab/input_mode_variation'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab - input mode variation - ',
      description: 'input date lab - input mode variation - Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>{this.props.title}</h1>
        <h2>{`input[inputmode="text"]`}</h2>
        <Sample1 />
        <h2>{`input[inputmode="tel"]`}</h2>
        <Sample2 />
        <h2>{`input[inputmode="url"]`}</h2>
        <Sample3 />
        <h2>{`input[inputmode="email"]`}</h2>
        <Sample4 />
        <h2>{`input[inputmode="numeric"]`}</h2>
        <Sample5 />
        <h2>{`input[inputmode="decimal"]`}</h2>
        <Sample6 />
        <h2>{`input[inputmode="search"]`}</h2>
        <Sample7 />
      </>
    )
  }
}

export default Page
