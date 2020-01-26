import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2, Sample3, Sample4 } from '~/components/views/tags/input_date_lab'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'input date lab',
      description: 'input date lab Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>input</h1>
        <h2 id="before">Before</h2>
        <Sample1 value="" />
        <h2 id="#input_variation">Input Variation</h2>
        <Sample2 value="" />
        <h2 id="#after">After</h2>
        <Sample3 value="" />
        <h2 id="#feature">Feature</h2>
        <Sample4 value="" />
      </>
    )
  }
}

export default Page
