import { Component } from 'react'
import Head from '~/components/head'
import { Sample1 } from '~/components/views/styles/focus_within'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: ':focus-within',
      description: ':focus-within Examples.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <Sample1 />
      </>
    )
  }
}

/* :focus-in */
export default Page
