import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <img src="/images/yagi_v_type1.png" alt="yagi_v_type2" width="300" height="300" />
    <img src="/images/yagi_v_type2.png" alt="yagi_v_type2" width="300" height="300" />
    <div className="cover">
      <p className="row">invert(.7)</p>
      <p className="row">opacity(.7)</p>
      <p className="row">sepia(.7)</p>
      <p className="row">saturate(.7)</p>
      <p className="row">hue-rotate(120deg)</p>
    </div>
  </div>
)

export default styled(View)`
  position: relative;
  height: 300px;
  margin: 0;
  border: 1px solid #ddd;
  text-align: left;
  overflow: hidden;

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 20%;
    background-color: rgba(255, 255, 255, 0.5);

    .row {
      margin: 0;
      padding: 0 16px;
      text-align: right;
      line-height: calc(300px / 5);
      font-size: 20px;
      font-weight: bold;

      &:nth-child(1) {
        backdrop-filter: invert(0.7);
        color: white;
      }
      &:nth-child(2) {
        backdrop-filter: opacity(0.4);
      }
      &:nth-child(3) {
        backdrop-filter: sepia(0.7);
      }
      &:nth-child(4) {
        backdrop-filter: saturate(0.7);
      }
      &:nth-child(5) {
        backdrop-filter: hue-rotate(120deg);
      }
    }
  }
`
