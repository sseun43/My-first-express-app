    var cleancalc=require("./1-cleancalc.js")
    var express = require("express");
    var path = require("path");
    var http = require("http");
    var app = express();
    var display = path.resolve(__dirname, "htmlFolder");

    var strarr;
    var parsestring=function(str){
        return str.split(",").map(function(v){return Number(v)})
        console.log()
    }
    // operate/:operation/:arg1/:arg2

    app.get("/operate",function(req,res){
        console.log(strarr);
        var result=cleancalc.operate(strarr[2],strarr[0],strarr[1]).toString()
        res.end(result)
        
    });

    app.get("/add/:str",function(req,res){
        strarr=parsestring(req.params.str)
        strarr.push("add")
        res.send("adding")
    });

    app.get("/subtract/:str",function(req,res){
        strarr=parsestring(req.params.str)
        strarr.push("subtract")
        res.send("subtracting")
    });

    app.get("/multiply/:str",function(req,res){
        strarr=parsestring(req.params.str)
        strarr.push("multiply")
        res.send("multiply")
    });

    app.get("/divide/:str",function(req,res){
        strarr=parsestring(req.params.str)
        strarr.push("divide")
        res.send("divide")
    });



    http.createServer(app).listen(3000);
