import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

class CSSMenu extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="300" height="300" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="300" height="300" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="300" height="300" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="300" height="300" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="300" height="300" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="300" height="300" />
      </div>
    )
  }
}

export default styled(CSSMenu)`
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
