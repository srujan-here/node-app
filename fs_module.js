// const {readFileSync, writeFileSync} = require("fs");
const {readFile,writeFile}=require("fs");
// const f1=readFileSync('./content/sub/first.txt','utf8')
// const f2=readFileSync('./content/sub/second.txt','utf8')

// console.log(f1,f2)


// writeFileSync('./content/sub/srujan.txt',`hello iam srujan ${f1},${f2}`)


readFile('./content/sub/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return
    }
   
        console.log(result)
    
})