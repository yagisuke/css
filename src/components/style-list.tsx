import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

class StyleList extends React.Component<Props> {
  render() {
    return (
      <ul className={this.props.className}>
        <li>
          <Link href="/styles/test/" prefetch={false}>
            <a>Style stylestyle...</a>
          </Link>
        </li>
        <li>
          <Link href="/styles/test/" prefetch={false}>
            <a>Style stylestyle...</a>
          </Link>
        </li>
        <li>
          <Link href="/styles/test/" prefetch={false}>
            <a>Style stylestyle...</a>
          </Link>
        </li>
      </ul>
    )
  }
}

export default StyleList
