import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  value: string
}

const View: React.FC<Props> = props => {
  const [date, updateDate] = useState(props.value)
  const [time, setTime] = useState({
    start: 0,
    end: 0
  })

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateDate(event.target.value)
  }, [])

  const handleStart = useCallback(() => {
    setTime({ ...time, start: new Date().getTime() })
  }, [time])

  const handleEnd = useCallback(() => {
    setTime({ ...time, end: new Date().getTime() })
  }, [time])

  return (
    <div className={props.className}>
      <input
        type="tel"
        name="date"
        placeholder="1979/01/01"
        pattern="[0-9０-９]{10}"
        value={date}
        onChange={handleChange}
        onFocus={handleStart}
        onBlur={handleEnd}
      />
      <p>value: {date || 'none'}</p>
      <p>time: {time.start && time.end ? Math.floor((time.end - time.start) / 1000) : ' --- '}秒</p>
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
