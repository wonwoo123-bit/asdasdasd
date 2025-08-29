const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('static'));

app.get("/index",(req,res)=>{
    fs.readFile('./templates/index.html',(err,file)=>{
        if(err){
            res.status(500);
            res.send("<h1>에러발생</h1>");
            console.log(err);
            return;
        }else{
            res.status(200);
            res.type("text/html");
            res.send(file.toString());
        };
    });
});
app.get("/department",(req,res)=>{
    fs.readFile("./templates/department.html",(err,file)=>{    
            res.status(200);
            res.type("text/html");
            res.send(file.toString());
    });
});
app.get("/gallery",(req,res)=>{
    fs.readFile("./templates/gallery.html",(err,file)=>{
        res.type("text/html");
        res.send(file.toString());
    });
});
app.get("/location",(req,res)=>{
    fs.readFile("./templates/location.html",(err,file)=>{
        res.type("text/html");
        res.send(file.toString());
    });
});
app.get("/community",(req,res)=>{
    fs.readFile("./templates/community.html",(err,file)=>{
        res.type("text/html");
        res.send(file.toString());
    });
});
app.get("/youtube",(req,res)=>{
    fs.readFile("./templates/youtube.html",(err,file)=>{
        res.type("text/html");
        res.send(file.toString());
    });
});
app.get('/getImg/:fileName',(req,res)=>{
    const fileName = req.params.fileName;

    fs.readFile("static/img/"+fileName,(err,file)=>{
        // res.type("image/jpg");
        res.type("application/octet-stream");
        res.send(file);
    });
});

app.listen(52273,()=>{
    console.log("Server running at - 127.0.0.1:52273")
})