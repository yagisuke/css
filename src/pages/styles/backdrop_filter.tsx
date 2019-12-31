import { Component } from 'react'
import Head from '~/components/head'
import { Sample1, Sample2 } from '~/components/views/styles/backdrop_filter'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'backdrop-filter',
      description: 'backdrop-filter Sample.'
    }
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>backdrop-filter</h1>
        <Sample1 />
        <br />
        <Sample2 />
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href="https://css-tricks.com/almanac/properties/b/backdrop-filter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://css-tricks.com/almanac/properties/b/backdrop-filter/
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Page
