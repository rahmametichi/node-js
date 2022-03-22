const mymodule =require('./mymodule.js')
 const dir = process.argv[2]
 const ext = process.argv[3]


 mymodule(dir,ext,(err,filtered)=>{
     if(err) return console.error(err);

     filtered.forEach(element => {
         console.log(element)
         
     });
 })