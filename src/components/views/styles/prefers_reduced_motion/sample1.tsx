import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="motion">
      <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="50" height="50" />
      <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="50" height="50" />
      <img src="/images/yagi_v_type3.png" alt="yagi_v_type3" width="50" height="50" />
      <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="50" height="50" />
      <img src="/images/yagi_v_type1.png" alt="yagi_v_type1" width="50" height="50" />
    </div>
  </div>
)

export default styled(View)`
  position: relative;
  height: 300px;
  border: 1px solid #ddd;
  overflow: hidden;

  .motion {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    animation: MoveUpDown 1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      top: 0;
    }
    50% {
      top: 250px;
    }
  }
`
