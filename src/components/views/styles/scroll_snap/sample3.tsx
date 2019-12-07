import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

class CSSMenu extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type3.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type1.png" alt="yagi_type1" width="200" height="200" />
        <img src="/styles/yagi_type2.png" alt="yagi_type1" width="200" height="200" />
      </div>
    )
  }
}

export default styled(CSSMenu)`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(5, 200px);
  height: 600px;
  overflow: auto;
  border: 1px solid #ddd;
  scroll-snap-type: both mandatory;

  img {
    display: block;
    scroll-snap-align: center;
  }
`
