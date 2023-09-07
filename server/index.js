const express  = require('express');

const {uploadFile,getFileStream} = require('./s3')

const app = express();

app.get('/images/:key',(req,res)=>{
    console.log(req.params)
    const key = req.params.key
    const readStream = getFileStream(key)
})



app.listen(8080, () => console.log("listening on port 8080"))