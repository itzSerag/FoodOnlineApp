import express from 'express';

const app = express()

app.get("/" ,(req,res)=>{
    return res.status(200).json({
        status:"success"
    })
})

app.listen(5000,()=>{
    console.log("listening on port 5000");
    
})