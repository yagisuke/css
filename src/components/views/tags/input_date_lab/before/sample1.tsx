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

  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!props.value) {
      // clear placeholder & insert initial value.
      handleChange(event)
    }
  }, [])

  return (
    <div className={props.className}>
      <input
        type="date"
        name="date"
        value={date || '1979-01-01'}
        onChange={handleChange}
        onFocus={handleFocus}
        style={{ color: date ? 'inherit' : 'darkgray' }}
      />
      <p>value: {date || 'none'}</p>

      <input pattern="\d+" name="hoge" value="0" placeholder="hoge" maxLength={7} />
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
