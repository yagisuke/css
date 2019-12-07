import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  const [text, setText] = useState('')
  return (
    <div className={props.className}>
      <input
        type="text"
        value={text}
        placeholder="Please focus..."
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}

export default styled(View)`
  padding: 40px 16px;
  border: 1px solid #ddd;

  &:focus-within {
    border-color: #2c8898;
    background-color: #2c8898;
  }
`
