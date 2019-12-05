import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
}

class HeadTemplate extends React.Component<Props> {
  render() {
    return (
      <Head>
        <title>CSS{this.props.title && ` | ${this.props.title}`}</title>
        <meta name="description" content={this.props.description} />
      </Head>
    )
  }
}

export default HeadTemplate
