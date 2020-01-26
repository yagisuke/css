import React, { useCallback } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  value: string
}

const View: React.FC<Props> = props => {
  const [date, updateDate] = React.useState({
    text: props.value,
    number: props.value,
    tel: props.value,
    date: props.value
  })

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      updateDate({ ...date, [name]: value })
    },
    [date]
  )

  return (
    <div className={props.className}>
      <hr />
      <label htmlFor="sample2-text">input text</label>
      <input
        id="sample2-text"
        type="text"
        name="text"
        placeholder="1979/01/01"
        pattern="[0-9０-９/]{10}"
        value={date.text}
        onChange={handleChange}
      />
      <p>value: {date.text || 'none'}</p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`<input type="text"> - HTML: HyperText Markup Language | MDN`}
          </a>
        </li>
      </ul>
      <hr />
      <label htmlFor="sample2-number">input number</label>
      <input
        id="sample2-number"
        type="number"
        name="number"
        placeholder="1979/01/01"
        value={date.number}
        onChange={handleChange}
      />
      <p>value: {date.number || 'none'}</p>
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
      <hr />
      <label htmlFor="sample2-tel">input tel</label>
      <input
        id="sample2-tel"
        type="tel"
        name="tel"
        placeholder="1979/01/01"
        pattern="[0-9０-９/]{10}"
        value={date.tel}
        onChange={handleChange}
      />
      <p>value: {date.tel || 'none'}</p>
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
      <hr />
      <label htmlFor="sample2-tel">input date</label>
      <input id="sample2-date" type="date" name="date" value={date.date} onChange={handleChange} />
      <p>value: {date.date || 'none'}</p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/date"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`<input type="date"> - HTML: HyperText Markup Language | MDN`}
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
  hr {
    margin-bottom: 24px;
  }
`
