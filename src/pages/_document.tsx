import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import Layout from '~/components/layout'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRengerPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRengerPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
      })
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
    }
  }

  render() {
    return <Layout />
  }
}

export default MyDocument
