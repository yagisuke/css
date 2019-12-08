import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <p>Hello</p>
    <p>你好</p>
    <p>こんにちは</p>
    <p>안녕하세요</p>
    <p>السلام عليكم</p>
  </div>
)

export default styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  background-color: var(--theme-background);
  color: var(--theme-font);

  p {
    padding: 0;
    margin: 0;
    font-size: 32px;
  }
`
