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
      <Link href="/styles/prefers_reduced_motion/" prefetch={false}>
        <a>@media (prefers-reduced-motion)</a>
      </Link>
    </li>
    <li>
      <Link href="/styles/prefers_color_scheme/" prefetch={false}>
        <a>@media (prefers-color-scheme)</a>
      </Link>
    </li>
    <li>
      <Link href="/styles/is/" prefetch={false}>
        <a>:is()</a>
      </Link>
    </li>
    {/* <li>
      <Link href="/styles/houdini_paint_api/" prefetch={false}>
        <a>Paint API</a>
      </Link>
    </li> */}
  </ul>
)

export default View
