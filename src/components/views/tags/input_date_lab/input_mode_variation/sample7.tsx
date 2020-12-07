import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  const [date, updateDate] = useState('')

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateDate(event.target.value)
  }, [])

  return (
    <div className={props.className}>
      <input type="text" name="text" inputMode="search" value={date} onChange={handleChange} />
      <p>value: {date || 'none'}</p>
      <ul>
        <li>
          <a
            href="https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode-keyword-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`HTML Standard - 6.7.7 Input modalities: the inputmode attribute | search`}
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
