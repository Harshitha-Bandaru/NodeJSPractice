# NodeJSPractice

- The Quickest way of executing Nodejs code - REPL(Read, Evaluate, Print, Loop)
  command - node
- run js file - node filename.js
- The name of global object in node is 'global'. It's not part of v8 engine, it's provided by NodeJs, //ly, window object is provided by browser not v8.
- 'this' is not pointed to 'global' object by default, it's pointed to empty object {}
- globalThis - points towards global object in every JS runtime.(window in browser, self in web worker frame in iframe etc.)
- globalThis === global =>true(in node)
