import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => <div className={props.className}>Please hover...</div>

export default styled(View)`
  --gradientStart: #fff;
  --gradientEnd: #4a4a4a;
  background: linear-gradient(var(--gradientStart), var(--gradientEnd));
  color: var(--gradientEnd);
  height: 300px;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;

  &:hover {
    --gradientStart: #4a4a4a;
    --gradientEnd: #fff;
  }
`
