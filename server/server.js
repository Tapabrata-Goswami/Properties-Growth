import express from "express";

const app = express();
const port = process.env.PORT || 3300;

app.get('/',(req,resp)=>{
    resp.json({
        message : "Silence is golden"
    });
});

app.listen(port, (err)=>{
    console.log(`Server running on port ${port}`)
});