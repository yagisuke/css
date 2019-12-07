import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2, Sample3 } from '~/components/views/styles/scroll_snap'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'Scroll Snap',
      description: 'Scroll Snap Examples.'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        Horizontal Snap
        <Sample1 />
        Vertical Snap
        <Sample2 />
        Matrix Snap
        <Sample3 />
      </>
    )
  }
}

/* Awwww scroll-snap */
export default Page
