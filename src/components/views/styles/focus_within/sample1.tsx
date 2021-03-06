import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  const [text, setText] = useState('')
  return (
    <div className={props.className}>
      <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="50" height="50" />
      <input
        type="text"
        value={text}
        placeholder="Please focus..."
        onChange={e => setText(e.target.value)}
        style={{ marginBottom: 0, fontSize: '16px' }}
      />
    </div>
  )
}

export default styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border: 1px solid #ddd;

  img {
    margin-right: 16px;
    transition: opacity 0.5s, transform 0.5s;
    opacity: 0.25;
  }

  &:focus-within {
    border-color: #2c8898;
    background-color: #2c8898;

    img {
      opacity: 1;
      transform: rotate(360deg);
    }
  }
`
