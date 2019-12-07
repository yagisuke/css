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
