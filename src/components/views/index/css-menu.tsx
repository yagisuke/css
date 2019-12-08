import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <ul className={props.className}>
    <li>
      <Link href="/styles/scroll_snap/" prefetch={false}>
        <a>Scroll Snap</a>
      </Link>
    </li>
    <li>
      <Link href="/styles/focus_within/" prefetch={false}>
        <a>:focus-within</a>
      </Link>
    </li>
    <li>
      <Link href="/styles/media_prefers/" prefetch={false}>
        <a>@media(prefers-*)</a>
      </Link>
    </li>
    <li>
      <Link href="/styles/is/" prefetch={false}>
        <a>:is()</a>
      </Link>
    </li>
  </ul>
)

export default View
