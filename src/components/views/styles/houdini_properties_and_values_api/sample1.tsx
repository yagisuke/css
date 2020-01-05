import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <>
    <div className={props.className}>Please hover...</div>
    <script src="/scripts/houdini_properties_and_values_api/index.js" />
  </>
)

export default styled(View)`
  height: 300px;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;

  --gradient-start: white;
  --gradient-end: gray;
  background: linear-gradient(var(--gradient-start), var(--gradient-end));
  color: var(--gradient-end);
  transition: --gradient-start 1.5s;

  &:hover {
    --gradient-start: gray;
    --gradient-end: white;
  }
`
