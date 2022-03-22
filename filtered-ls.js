const fs = require("fs") ;

const path = require("path");

const dir=process.argv[2]

const ext = `.${process.argv[3]}` ;

fs.readdir(dir ,(err,list)=>{list.forEach(file=>{
    if(err) return console.error(err);
    if (path.extname(file) === ext ) { console.log(file)}}
      )}
    )