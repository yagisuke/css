import React, { useState, useCallback, useMemo, createRef } from 'react'
import styled from 'styled-components'
import { formatDate } from '~/utils/input_date_lab'

type Props = {
  className?: string
  value: string
}

const DATE_OPTION = {
  year: {
    limit: 4,
    ref: createRef<HTMLInputElement>(),
    next: 'month'
  },
  month: {
    limit: 2,
    ref: createRef<HTMLInputElement>(),
    next: 'day'
  },
  day: {
    limit: 2,
    ref: createRef<HTMLInputElement>(),
    next: ''
  }
}

const View: React.FC<Props> = props => {
  const [date, updateDate] = useState<{ year: string; month: string; day: string }>(() => {
    const date = props.value.split('-')
    return {
      year: date[0] || '',
      month: date[1] || '',
      day: date[2] || ''
    }
  })

  const resultDate = useMemo((): string => {
    const invalid = Object.keys(DATE_OPTION).find(key => {
      return DATE_OPTION[key].limit !== date[key].length
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
      // 自動タブ移動
      const complete = val.length === DATE_OPTION[name].limit
      const next = DATE_OPTION[name].next || ''
      if (complete && DATE_OPTION[next] && DATE_OPTION[next].ref.current) {
        DATE_OPTION[next].ref.current.focus()
      }
    },
    [date]
  )

  return (
    <div className={props.className}>
      <div className="container">
        <input
          type="tel"
          name="year"
          placeholder="1979"
          value={date.year}
          pattern={`[0-9]{${DATE_OPTION.year.limit}}`}
          maxLength={DATE_OPTION.year.limit}
          ref={DATE_OPTION.year.ref}
          onChange={handleChange}
        />
        <span className="mark">y</span>
        <input
          type="tel"
          name="month"
          placeholder="01"
          value={date.month}
          pattern={`[0-9]{${DATE_OPTION.month.limit}}`}
          maxLength={DATE_OPTION.month.limit}
          ref={DATE_OPTION.month.ref}
          onChange={handleChange}
        />
        <span className="mark">m</span>
        <input
          type="tel"
          name="day"
          placeholder="01"
          value={date.day}
          pattern={`[0-9]{${DATE_OPTION.day.limit}}`}
          maxLength={DATE_OPTION.day.limit}
          ref={DATE_OPTION.day.ref}
          onChange={handleChange}
        />
        <span className="mark">d</span>
      </div>
      <p>value: {resultDate || 'none'}</p>
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
