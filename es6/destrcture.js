// 数组解构
(function () {

    let [a, b, c] = [1, 2, 3]

    let [foo, [[bar], baz]] = [1, [[2], 3]]

    let [, , third] = ["foo", "bar", "baz"]

    let [x, , y] = [1, 2, 3]

    let [x1, y1] = [1, 2, 3]
})();

// 对象解构
(() => {

    // 改变顺序也是可以的
    // let { foo, bar } = {foo: 'aaa', bar : 'bbb'};

    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };

    // 属性名和变量名 <属性名>：<变量名>
    var { attr1: var1 } = { attr1: 'aaa', attr2: 'bbb' };
    // var1 = aaa
    // attr1 not defined

    let { toString: s } = 123;
    s === Number.prototype.toString()

})();

// 函数参数解构赋值
(() => {
    var add = function ([x, y]) {
        return x + y;
    }
    add([1, 2]);

    var result = [[1, 2], [3, 4]].map(([a, b]) => a + b);

    // 函数参数默认值
    function move({ x = 0, y = 0 } = {}) {
        return [x, y];
    }
    move({ x: 3, y: 8 });
    move({ x: 3 });
    move({});
    move();
})();

// 用途
(() => {
    // 交换变量
    let x = 1;
    let y = 2;
    [x, y] = [y, x];

    // 函数返回多个值
    function example1() {
        return [1, 2, 3];
    }
    let [a, b, c] = example1();

    function example2() {
        return {
            foo: 1,
            bar: 2
        }
    }
    let { foo, bar } = example2();

    // 参数是一组有次序的值
    function f([x, y, z]) { }
    f([1, 2, 3]);

    // 提取JSON数据
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);

    // 函数参数默认值
    // jQuery.ajax = function (url, {
    //     async = true,
    //     beforeSend = function () { },
    //     cache = true,
    //     complete = function () { },
    //     crossDomain = false,
    //     global = true,
    //     // ... more config
    // }) {
    //     // ... do stuff
    // };

    // 便利MAP结构
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }
    // 获取键名
    for (let [key] of map) {
        // ...
    }

    // 获取键值
    for (let [, value] of map) {
        // ...
    }
})()