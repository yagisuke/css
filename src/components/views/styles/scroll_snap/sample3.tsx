import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
    <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="200" height="200" />
    <img src="/images/yagi_type3.png" alt="yagi_type3" width="200" height="200" />
    <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="200" height="200" />
    <img src="/images/yagi_type2.png" alt="yagi_type2" width="200" height="200" />
    <img src="/images/yagi_v_type3.png" alt="yagi_v_type3" width="200" height="200" />
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
    <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="200" height="200" />
    <img src="/images/yagi_type3.png" alt="yagi_type3" width="200" height="200" />
    <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="200" height="200" />
    <img src="/images/yagi_type2.png" alt="yagi_type2" width="200" height="200" />
    <img src="/images/yagi_v_type3.png" alt="yagi_v_type3" width="200" height="200" />
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
    <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="200" height="200" />
    <img src="/images/yagi_type3.png" alt="yagi_type3" width="200" height="200" />
    <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="200" height="200" />
    <img src="/images/yagi_type2.png" alt="yagi_type2" width="200" height="200" />
    <img src="/images/yagi_v_type3.png" alt="yagi_v_type3" width="200" height="200" />
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
    <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="200" height="200" />
    <img src="/images/yagi_type3.png" alt="yagi_type3" width="200" height="200" />
    <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="200" height="200" />
    <img src="/images/yagi_type2.png" alt="yagi_type2" width="200" height="200" />
    <img src="/images/yagi_v_type3.png" alt="yagi_v_type3" width="200" height="200" />
    <img src="/images/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
  </div>
)

export default styled(View)`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(5, 200px);
  height: 600px;
  overflow: auto;
  border: 1px solid #ddd;
  overscroll-behavior: contain contain;
  scroll-snap-type: both mandatory;

  img {
    display: block;
    scroll-snap-align: center;
  }
`
