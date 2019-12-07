import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2, Sample3 } from '~/components/views/styles/horizontal_snap'

type Props = {
  className?: string
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'style',
      description: 'style'
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <Head title={this.props.title} description={this.props.description} />
        <Sample1 />
        <Sample2 />
        <Sample3 />
      </div>
    )
  }
}

/* Awwww scroll-snap */
export default Page
