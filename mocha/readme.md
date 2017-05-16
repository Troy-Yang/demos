### Basic usage
- mocha add.test.js 
test single file
- mocha file1 file2 file3
test multi files
- mocha 
test default folder 'test'
- mocha --recursive
recursive test
- mocha test/unit/*.js
- mocha 'test/**/*.@(js|jsx)'

### Command
- mocha --watch
- mocha --grep "test case name"
Report
- mocha --reporter spec
- mocha --reporter tap
- mocha --reporters list all supported report

#### using mochawesome report
```
$ npm install --save-dev mochawesome
$ ../node_modules/.bin/mocha --reporter mochawesome
```

### configuration mocha.opts
```
$ mocha --recursive --reporter tap --growl
--reporter tap
--recursive
--growl
```