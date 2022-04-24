const path = require("path");

const say=path.join("/content","sub","test.txt");

console.log(say);

const base=path.basename(say);

console.log(base);