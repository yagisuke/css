import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <>
    <div className={props.className}>invalid..</div>
    <script src="/scripts/houdini_properties_and_values_api/sample1.js" />
  </>
)

export default styled(View)`
  height: 300px;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;

  --invalid-color: '404 Notfound.';
  background-color: var(--invalid-color);
`
