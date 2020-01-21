import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  value: string
}

const View: React.FC<Props> = props => {
  const [sample1, updateSample1] = React.useState(props.value)
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateSample1(e.target.value)
    },
    [sample1]
  )

  return (
    <div className={props.className}>
      <label>
        text:
        <input
          type="text"
          name="sample1"
          placeholder="1989-02-09"
          value={sample1}
          onChange={handleChange}
        />
      </label>
      <label>
        number:
        <input
          type="number"
          name="sample1"
          placeholder="1989-02-09"
          value={sample1}
          onChange={handleChange}
        />
      </label>
      <label>
        date:
        <input
          type="date"
          name="sample1"
          placeholder="1989-02-09"
          value={sample1}
          onChange={handleChange}
        />
      </label>
      <label>
        tel:
        <input
          type="tel"
          name="sample1"
          placeholder="1989-02-09"
          value={sample1}
          onChange={handleChange}
        />
      </label>
      <label>
        value:
        <p className="result">{sample1 || 'none'}</p>
      </label>
    </div>
  )
}

export default styled(View)`
  input {
    display: block;
    width: 300px;
    height: 50px;
  }
`
