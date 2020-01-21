import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <figure className={props.className}>
    <img src="/images/yagi_v_type1.png" alt="" width="300" height="300" />
    <figcaption className="caption">This is a YAGI.</figcaption>
  </figure>
)

export default styled(View)`
  position: relative;
  height: 300px;
  margin: 0;
  border: 1px solid #ddd;
  background-color: yellowgreen;
  text-align: center;

  .caption {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 8px 16px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    backdrop-filter: blur(7px);
    background-color: rgba(0, 0, 0, 0.4);
  }
`
