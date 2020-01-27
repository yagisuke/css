import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { toHalfWidthDigit, formatDate } from '~/utils/input_date_lab'

type Props = {
  className?: string
  value: string
}

const View: React.FC<Props> = props => {
  const [date, updateDate] = useState(props.value)
  const [tempDate, updateTempDate] = useState(props.value)

  const updateValue = useCallback(updateVal => {
    updateTempDate(updateVal)
    updateDate(updateVal)
  }, [])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputVal = toHalfWidthDigit(event.target.value)

      console.log('value: ', inputVal)

      // 不正な値
      if (!inputVal) return updateValue(inputVal)
      // 日付の区切り文字 '/' を消した場合
      if (inputVal === tempDate.replace(/-/g, '')) return updateValue(event.target.value)
      // 正常系
      updateValue(formatDate(inputVal))
    },
    [tempDate]
  )

  return (
    <div className={props.className}>
      <input
        type="tel"
        name="tel"
        placeholder="1979/01/01"
        pattern="[0-9０-９/]{10}"
        value={date.replace(/-/g, '/')}
        onChange={handleChange}
      />
      <p>value: {date || 'none'}</p>
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
