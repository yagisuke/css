import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

class CSSMenu extends React.Component<Props> {
  render() {
    return (
      <ul className={this.props.className}>
        <li>
          <Link href="/styles/horizontal_snap/" prefetch={false}>
            <a>Horizontal Snap</a>
          </Link>
        </li>
      </ul>
    )
  }
}

export default CSSMenu
