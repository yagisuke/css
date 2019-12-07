import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  const [text, setText] = useState('')
  return (
    <div className={props.className}>
      <p>{text}</p>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default styled(View)`
  padding: 300px;
  background: pink;

  &:focus-within {
    background: red;
  }
`
