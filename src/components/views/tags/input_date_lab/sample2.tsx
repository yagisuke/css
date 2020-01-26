import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  value: string
}

const View: React.FC<Props> = props => <div className={props.className}>sample2</div>

export default styled(View)``
