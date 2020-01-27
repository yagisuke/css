import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  value: string
}

const View: React.FC<Props> = props => {
  const [date, updateDate] = useState(props.value)

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateDate(event.target.value)
  }, [])

  return (
    <div className={props.className}>
      <input
        type="number"
        name="number"
        placeholder="1979/01/01"
        value={date}
        onChange={handleChange}
      />
      <p>value: {date || 'none'}</p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/number"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`<input type="number"> - HTML: HyperText Markup Language | MDN`}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default styled(View)`
  input {
    width: 100%;
    max-width: 300px;
    height: 50px;
    font-size: 18px;
  }
`
