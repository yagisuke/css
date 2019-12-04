import { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Hello from '~/components/hello'

type Props = {
  className?: string
}

class Page extends Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <Link href="/styles/test">
          <a>
            <Hello />
          </a>
        </Link>
      </div>
    )
  }
}

export default styled(Page)`
  a {
    color: black;
  }
`
