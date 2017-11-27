const express=require("express");
const serveStatic=require("serve-static");

var app=express();

app.use(serveStatic("index.html",{}));

app.listen(3000);