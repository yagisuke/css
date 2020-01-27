import React from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <ul className={props.className}>
    <li>
      <Link href="/tags/input_date_lab/before/" prefetch={false}>
        <a>Before</a>
      </Link>
    </li>
    <li>
      <Link href="/tags/input_date_lab/input_variation/" prefetch={false}>
        <a>Input Variation</a>
      </Link>
    </li>
    <li>
      <Link href="/tags/input_date_lab/vs_selectbox/" prefetch={false}>
        <a>VS Selectbox</a>
      </Link>
    </li>
    <li>
      <Link href="/tags/input_date_lab/adjust_input_date/" prefetch={false}>
        <a>Adjust Input Date</a>
      </Link>
    </li>
    <li>
      <Link href="/tags/input_date_lab/input_mode/" prefetch={false}>
        <a>Feature</a>
      </Link>
    </li>
  </ul>
)

export default View
