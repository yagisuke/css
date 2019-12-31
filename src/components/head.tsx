import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
}

const View: React.FC<Props> = props => (
  <Head>
    <title>$ ls CSS{props.title && ` | ${props.title}`}</title>
    <meta name="description" content={props.description} />
    {props.children}
  </Head>
)

export default View
