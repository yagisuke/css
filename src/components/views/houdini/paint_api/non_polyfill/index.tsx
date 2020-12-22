import React, { useEffect } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  useEffect(() => {
    CSS.paintWorklet.addModule('/scripts/houdini_paint_api/static-gradient.js')
  }, [])
  return (
    <div className={props.className}>
      <img src="/images/yagi_v_type1.png" alt="" width="300" height="300" />
    </div>
  )
}

export default styled(View)`
  --static-gradient-direction: to-top;
  --static-gradient-color: #73a5af;
  --static-gradient-size: 5;
  background-image: paint(static-gradient);
  padding: 100px 0;
  text-align: center;
`
