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
        type="tel"
        name="tel"
        placeholder="1979/01/01"
        pattern="[0-9０-９/]{10}"
        value={date}
        onChange={handleChange}
      />
      <p>value: {date || 'none'}</p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/tel"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`<input type="tel"> - HTML: HyperText Markup Language | MDN`}
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
