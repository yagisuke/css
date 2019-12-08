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
        <h1>Scroll Snap</h1>
        <h2>Horizontal Snap</h2>
        <Sample1 />
        <h2>Vertical Snap</h2>
        <Sample2 />
        <h2>Matrix Snap</h2>
        <Sample3 />
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/scroll-snap-type"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.mozilla.org/ja/docs/Web/CSS/scroll-snap-type
            </a>
          </li>
          <li>
            <a
              href="https://coliss.com/articles/build-websites/operation/css/how-to-use-css-scroll-snap.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://coliss.com/articles/build-websites/operation/css/how-to-use-css-scroll-snap.html
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Page
