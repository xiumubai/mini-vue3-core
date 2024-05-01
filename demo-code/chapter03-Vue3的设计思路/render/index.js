function render(obj, root) {
  let el = document.createElement(obj.tagName);

  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children);
    el.appendChild(text);
  } else if (obj.children) {
    obj.children.forEach(child => {
      render(child, el);
    })
  }

  root.appendChild(el);
}

const obj = {
  tagName: 'div',
  children: [
    {
      tag: 'sapn',
      children: 'hello world'
    }
  ]
}
render(obj, document.body)