import React, { useEffect } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  useEffect(() => {
    ;(async () => {
      const needPolyfill = !('paintWorklet' in CSS)
      if (needPolyfill) {
        await import('css-paint-polyfill')
      }
      await CSS.paintWorklet.addModule('/scripts/houdini_paint_api/static-gradient.js')
      if (needPolyfill) {
        window.dispatchEvent(new Event('resize'))
      }
    })()
  }, [])
  return (
    <div className={props.className}>
      <img src="/images/yagi_v_type2.png" alt="" width="300" height="300" />
    </div>
  )
}

export default styled(View)`
  --static-gradient-direction: to-top;
  --static-gradient-color: #5d7377;
  --static-gradient-size: 5;
  background-image: paint(static-gradient);
  padding: 100px 0;
  text-align: center;
`
