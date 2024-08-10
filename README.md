# NodeJSPractice

- The Quickest way of executing Nodejs code - REPL(Read, Evaluate, Print, Loop)
  command - node
- run js file - node filename.js
- The name of global object in node is 'global'. It's not part of v8 engine, it's provided by NodeJs, //ly, window object is provided by browser not v8.
- 'this' is not pointed to 'global' object by default, it's pointed to empty object {}
- globalThis - points towards global object in every JS runtime.(window in browser, self in web worker frame in iframe etc.)
- globalThis === global =>true(in node)

- require(file_path) - runs the code of file in file_path first
- Modules are protected by default - i.e., to avoid leaking of variables and methods
- whatever you export from module.exports in a file, it will get returned when you import it other file
- you can export multiple variables and methods from a file by wrapping them in a object

- There are two types of module patterns in node
- Common Js Modules(cjs) - default - module.exports={a,b} in one file, require(file_path) - synchronous - runs in non-strict mode
- ES Modules(mjs) - default in react, angular - have to specify - {type:module} in package.json in node - asynchronous - runs in strict mode
- module.exports is a empty object by default, {}
- you can export multiple files from a folder as a single module by adding a index.js in that folder and adding imports of every file there and exporting them.
