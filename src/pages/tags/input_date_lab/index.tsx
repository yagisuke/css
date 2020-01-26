import { Component } from 'react'
import Head from '~/components/head'
import { Menu } from '~/components/views/tags/input_date_lab/index/'

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
        <h1>{this.props.title}</h1>
        <Menu />
      </>
    )
  }
}

export default Page
