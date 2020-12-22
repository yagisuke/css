import { Component } from 'react'
import dynamic from 'next/dynamic'
import Header from 'next/head'
import Head from '~/components/head'
const View = dynamic(() => import('~/components/views/houdini/paint_api/add_polyfill'), {
  ssr: false
})

type Props = {
  title: string
  description: string
}

class Page extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {
      title: '',
      description: '$ ls CSS | Houdini > Paint API > Add Polyfill'
    }
  }
  render() {
    return (
      <>
        <Header>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              ;(async () => {
                const needPolyfill = !('paintWorklet' in CSS)
                if (needPolyfill) {
                  await import('css-paint-polyfill')
                }
                await CSS.paintWorklet.addModule('/scripts/houdini_paint_api/static-gradient.js')
                if (needPolyfill) {
                  window.dispatchEvent(new Event('resize'))
                }
              })()
            `
            }}
          />
        </Header>
        <Head title={this.props.title} description={this.props.description} />
        <View />
      </>
    )
  }
}

export default Page
