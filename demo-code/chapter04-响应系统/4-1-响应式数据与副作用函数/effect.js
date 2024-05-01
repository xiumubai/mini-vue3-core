let val = 1

// 副作用函数
function effect() {
  val = 2
}

// 响应式对象
const obj = {
  text: 'hello'
}

function effect2() {
  document.body.innerText = obj.text
}

