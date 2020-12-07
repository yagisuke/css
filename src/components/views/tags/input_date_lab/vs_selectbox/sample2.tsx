import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import getDaysInMonth from 'date-fns/getDaysInMonth'
const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

type Props = {
  className?: string
  minAge: number
  maxAge: number
}

const View: React.FC<Props> = props => {
  const [time, setTime] = useState({ start: 0, end: 0 })

  const [date, updateDate] = useState({ year: '', month: '', day: '' })
  const [years] = useState(() => {
    const currentYear = new Date().getFullYear()
    return [...Array(props.maxAge - props.minAge)].map(
      (_, i) => currentYear - props.minAge - (i + 1)
    )
  })
  const days = useMemo(() => {
    if (!date.year || !date.month) return []
    const last = getDaysInMonth(new Date(`${date.year}-${date.month}`))
    return [...Array(last)].map((_, i) => ('00' + (i + 1)).slice(-2))
  }, [date.year, date.month])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target
      updateDate({ ...date, [name]: value })
    },
    [date]
  )

  const handleStart = useCallback(() => {
    setTime({ ...time, start: new Date().getTime() })
  }, [time])

  const handleEnd = useCallback(() => {
    setTime({ ...time, end: new Date().getTime() })
  }, [time])

  return (
    <div className={props.className}>
      <div className="date">
        <select name="year" value={date.year} onChange={handleChange} onFocus={handleStart}>
          <option value="">---</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <span className="mark">y</span>
        <select name="month" value={date.month} onChange={handleChange}>
          <option value="">---</option>
          {MONTHS.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <span className="mark">m</span>
        <select name="day" value={date.day} onChange={handleChange} onBlur={handleEnd}>
          <option value="">---</option>
          {days.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <span className="mark">d</span>
      </div>
      <p>
        value:{' '}
        {date.year && date.month && date.day ? `${date.year}-${date.month}-${date.day}` : 'none'}
      </p>
      <p>time: {time.start && time.end ? Math.floor((time.end - time.start) / 1000) : ' --- '}秒</p>
    </div>
  )
}

export default styled(View)`
  .date {
    display: flex;
    align-items: flex-end;

    select {
      height: 50px;
      margin: 0;
      font-size: 18px;
    }
  }
  .mark {
    padding: 0 8px;
  }
`
