(function () {
    function* gen(x) {
        var y = yield x + 2;
        return y;
    }
    var g = gen(1);

    console.log(g.next());
    //{ value: 3, done: false }
    console.log(g.next());
    //{ value: undefined, done: true }
})();

// 传入参数
(function () {
    function* gen(x) {
        var y = yield x + 2;
        return y;
    }
    var g = gen(1);

    console.log(g.next());
    //{ value: 3, done: false }
    console.log(g.next(2));
    //{ value: 2, done: true }
})();

// 捕获函数体外异常，异常处理
(function () {
    function* gen(x) {
        try {
            var y = yield x + 2;
        }
        catch (e) {
            console.log(e);
        }
    }

    var g = gen(1);
    g.next();
    g.throw("exception happened")
})();

(function () {
    var fetch = require('node-fetch');

    function* gen() {
        var url = 'https://api.github.com/users/github';
        var result = yield fetch(url);
        console.log(result.bio);
    }

    var g = gen();
    var result = g.next();

    result.value.then(function (data) {
        return data.json();
    }).then(function (data) {
        g.next(data);
    });
})();