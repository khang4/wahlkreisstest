const express=require("express");
const serveStatic=require("serve-static");

var app=express();

app.use(serveStatic(".",{}));

app.listen(3000);