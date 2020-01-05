import { Component } from 'react'
import Head from '~/components/head'
// import { Sample1 } from '~/components/views/styles/houdini_typed_om'

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: 'Typed OM',
      description: 'Typed OM Sample.'
    }
  }
  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <h1>Typed OM</h1>
        {/* <Sample1 /> */}
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href="https://qiita.com/ttakuru88/items/9ea2f2d7c565ed51d774"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://qiita.com/ttakuru88/items/9ea2f2d7c565ed51d774
            </a>
          </li>
          <li>
            <a
              href="https://qiita.com/mk-tool/items/18928137b217184f3fdc"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://qiita.com/mk-tool/items/18928137b217184f3fdc
            </a>
          </li>
        </ul>
      </>
    )
  }
}

export default Page
