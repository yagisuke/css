import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="target" />
    <script
      dangerouslySetInnerHTML={{
        __html: `CSS.paintWorklet.addModule('/scripts/houdini_paint_api/sample1.js')`
      }}
    />
  </div>
)

export default styled(View)`
  .target {
    width: 500px;
    height: 500px;
    background-image: paint(circle);
  }
`
