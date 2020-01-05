if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--gradient-start-color',
    syntax: '<color>',
    initialValue: 'transparent',
    inherits: false
  });
} else {
  document.body.innerHTML = 'You need support for <a href="https://drafts.css-houdini.org/css-properties-values-api/">CSS Properties and Values</a> to view this demo :(';
}
  