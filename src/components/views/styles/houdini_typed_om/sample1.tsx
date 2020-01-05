// import React from 'react'
// import styled from 'styled-components'

// type Props = {
//   className?: string
// }

// const View: React.FC<Props> = props => {
//   function onClick() {
//     const h1 = document.getElementById('sample1');
//     const oldInfo = document.getElementById('old-font-information');
//     const newInfo = document.getElementById('new-font-information');

//     oldInfo.innerHTML = window.getComputedStyle(h1).getPropertyValue('font-size')
//     newInfo.innerHTML = h1.computedStyleMap().get('font-size');
//   }
//   return (
//     <>
//       <div id="sample1" className={props.className}>Sample Text</div>
//       <button onClick={onClick}>
//     </>
//   )
// }

// export default styled(View)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 300px;
//   border: 1px solid #ddd;
//   font-style: italic;
//   font-size: 48px;
//   font-weight: bold;
// `
