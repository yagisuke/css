import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <img src="/images/yagi_v_type2.png" alt="" width="300" height="300" />
    </div>
  )
}

export default styled(View)`
  --static-gradient-direction: to-top;
  --static-gradient-color: #73a5af;
  --static-gradient-size: 5;
  background-image: paint(static-gradient);
  text-align: center;
`
