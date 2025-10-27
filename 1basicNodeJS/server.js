// Protocol : Internet par kuch v krne ke liye rules bnaye gaye he unke dwaara jinhone internet bnaya he, ab un rules ko follow krna jarruri he or ye rules follow ho isiliye ye rules hmare OS ke s/w me pre installed aate h
// yahi protocol he ya rule he jisko follow kare bina aap internet pr naa hii kuch bhej skte ho or nahi kuch mnga skte ho.
const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("Hello from server");
})

server.listen(3000)