import express from 'express';

const app = express();

const port = 5001;

app.get("/api/notes", (req,res) =>{
    
})




app.listen(port, () =>{
    console.log(`Server running on port: ${port}.`)
})