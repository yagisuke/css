import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { formatDate } from '~/utils/input_date_lab'

type Props = {
  className?: string
}

const DATE_OPTION = {
  year: {
    limit: 4,
    pattern: '4'
  },
  month: {
    limit: 2,
    pattern: '1,2'
  },
  day: {
    limit: 2,
    pattern: '1,2'
  }
}

const View: React.FC<Props> = props => {
  const [time, setTime] = useState({ start: 0, end: 0 })
  const [date, updateDate] = useState({ year: '', month: '', day: '' })
  const resultDate = useMemo((): string => {
    const invalid = Object.keys(DATE_OPTION).find(key => {
      const regexp = new RegExp(`[0-9０-９]{${DATE_OPTION[key].pattern}}`)
      return date[key].match(regexp) === null
    })
    if (invalid) return ''
    return formatDate(date.year + date.month + date.day)
  }, [date])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value.replace(/[^0-9０-９]/g, '')
      const name = event.target.name
      console.log('value: ', val)
      // 上限突破しようとする場合
      if (DATE_OPTION[name].limit < val.length) return
      // 正常系
      updateDate({ ...date, [name]: val })
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
      <div className="container">
        <input
          type="tel"
          name="year"
          placeholder="1979"
          value={date.year}
          pattern={`[0-9０-９]{${DATE_OPTION.year.pattern}}`}
          maxLength={DATE_OPTION.year.limit}
          onChange={handleChange}
          onFocus={handleStart}
        />
        <span className="mark">y</span>
        <input
          type="tel"
          name="month"
          placeholder="01"
          value={date.month}
          pattern={`[0-9０-９]{${DATE_OPTION.month.pattern}}`}
          maxLength={DATE_OPTION.month.limit}
          onChange={handleChange}
        />
        <span className="mark">m</span>
        <input
          type="tel"
          name="day"
          placeholder="01"
          value={date.day}
          pattern={`[0-9０-９]{${DATE_OPTION.day.pattern}}`}
          maxLength={DATE_OPTION.day.limit}
          onChange={handleChange}
          onBlur={handleEnd}
        />
        <span className="mark">d</span>
      </div>
      <p>value: {resultDate || 'none'}</p>
      <p>time: {time.start && time.end ? Math.floor((time.end - time.start) / 1000) : ' --- '}秒</p>
    </div>
  )
}

export default styled(View)`
  .container {
    display: flex;
    align-items: flex-end;
  }
  input {
    width: 100%;
    max-width: 80px;
    height: 50px;
    margin: 0;
    padding: 4px;
    font-size: 16px;
  }
  .mark {
    padding: 0 8px;
  }
`
