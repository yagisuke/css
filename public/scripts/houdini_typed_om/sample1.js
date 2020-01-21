if (window) {
  const h1 = document.getElementById('sample1');
  const oldInfo = document.getElementById('old-font-information');
  const newInfo = document.getElementById('new-font-information');

  oldInfo.innerHTML = window.getComputedStyle(h1).getPropertyValue('font-size')
  newInfo.innerHTML = h1.computedStyleMap().get('font-size');
}
