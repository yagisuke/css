import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="300" height="300" />
    <img src="/images/yagi_type2.png" alt="yagi_type2" width="300" height="300" />
    <img src="/images/yagi_type3.png" alt="yagi_type3" width="300" height="300" />
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="300" height="300" />
    <img src="/images/yagi_type2.png" alt="yagi_type2" width="300" height="300" />
    <img src="/images/yagi_type3.png" alt="yagi_type3" width="300" height="300" />
  </div>
)

export default styled(View)`
  display: flex;
  border: 1px solid #ddd;
  height: 300px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  img {
    scroll-snap-align: center;
  }
`
