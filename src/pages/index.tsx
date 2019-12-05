import { Component } from 'react'
import Head from '~/components/head'
import StyleList from '~/components/style-list'

type Props = {
  className?: string
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '',
      description: 'style'
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <Head title={this.props.title} description={this.props.description} />
        <StyleList />
      </div>
    )
  }
}

export default Page
