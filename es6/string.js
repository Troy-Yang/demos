// 字符串中嵌入变量
var name = "Bob", time = "today";
console.info(`Hello ${name}, how are you ${time}?`);

console.info(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

// 包含运算
var x = 1;
var y = 2;
console.info(`${x} + ${y} = ${x + y}`)

// 包含函数调用
function fn() {
  return "Hello World";
}

console.info(`foo ${fn()} bar`)