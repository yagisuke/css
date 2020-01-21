import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <>
    <div className={props.className}>Please hover...</div>
    <script src="/scripts/houdini_properties_and_values_api/sample2.js" />
  </>
)

export default styled(View)`
  height: 300px;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;

  --gradient-start-color: white;
  --gradient-end-color: gray;
  background: linear-gradient(var(--gradient-start-color), var(--gradient-end-color));
  color: var(--gradient-end-color);
  transition: --gradient-start-color 1.5s;

  &:hover {
    --gradient-start-color: gray;
    --gradient-end-color: white;
  }
`
