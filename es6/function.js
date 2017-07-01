var f = v => v;

var sum = (numb1, numb2) => numb1 + numb2;
var sum = (numb1, numb2) => { numb1 + numb2; }

//与解构函数
const full = ({ first, last }) => first + ' ' + last;
var fullname = full({ first: 'yang', last: 'troy' });
console.info(fullname);

const isEven = n => n % 2 == 0;
const square = n => n * n;

var newArray = [1,2,3].map(x=>x*x);

// // This 永远是定义时的对象，而不是使用时的所在对象
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });