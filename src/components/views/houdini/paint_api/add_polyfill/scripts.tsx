import React from 'react'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <script
      className={props.className}
      dangerouslySetInnerHTML={{
        __html: `
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
        `
      }}
    />
  )
}

export default View
