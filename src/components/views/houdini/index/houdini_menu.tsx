import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <ul className={props.className}>
    <li>
      <Link href="/houdini/paint_api/non_polyfill/" prefetch={false}>
        <a>Non Polyfill</a>
      </Link>
    </li>
    <li>
      <Link href="/houdini/paint_api/add_polyfill/" prefetch={false}>
        <a>Add Polyfill</a>
      </Link>
    </li>
    <li>
      <Link href="/houdini/paint_api/simple_animation/" prefetch={false}>
        <a>Simple Animation</a>
      </Link>
    </li>
    <li>
      <Link href="/houdini/paint_api/ripple_animation/" prefetch={false}>
        <a>Ripple Animation</a>
      </Link>
    </li>
  </ul>
)

export default View
