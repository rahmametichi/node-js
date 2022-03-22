const { ChildProcess } = require('child_process');
const http = require('http')

const url = process.argv[2]

http.get(url , response => {
    let res ='';

    response.setEncoding('utf8');
    response.on('error' , (err)=>{console.error(err)});
    response.on('data',(data)=>res+=data)
    response.on('end' ,()=>{
        console.log(res.length)
        console.log(res)
    })
})