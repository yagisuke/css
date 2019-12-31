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
  height: 300px;
  border: 1px solid #ddd;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;

  img {
    display: block;
    margin: 0 auto;
    scroll-snap-align: center;
  }
`
