import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="motion">
      <span className="ball" />
      <span className="ball" />
      <span className="ball" />
      <span className="ball" />
      <span className="ball" />
    </div>
  </div>
)

export default styled(View)`
  position: relative;
  height: 300px;
  background-color: #ddd;
  overflow: hidden;

  .motion {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    animation: MoveUpDown 1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: MoveUpDown 10s linear infinite;
    }
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 250px;
    }
  }

  .ball {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.5;
  }
`
