import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <article className={props.className}>
    <h1>h1: This is a h1.</h1>
    <h2>h2: This is a h2.</h2>
    <h3>h3: This is a h3.</h3>
    <h4>h4: This is a h4.</h4>
    <h5>h5: This is a h5.</h5>
    <h6>h6: This is a h6.</h6>
  </article>
)

export default styled(View)`
  padding: 16px;
  border: 1px solid #ddd;

  > :is(h1, h2, h3, h4, h5, h6) {
    color: red;
  }
`
