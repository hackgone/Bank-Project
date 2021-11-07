const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req,res) {
  res.sendFile(__dirname+"/home.html");
});
app.get("/login",function (req,res) {
  res.sendFile(__dirname+"/login.html");
});
app.get("/signin",function (req,res) {
  res.sendFile(__dirname+"/signin.html");
});


app.listen(3000,function () {
  console.log("server is running");
})
