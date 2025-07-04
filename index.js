const express = require("express");
const bodyParser = require("body-parser");


var app=express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extend:true}));

app.get("/",function(req,res){

    res.render("Index",{ pageTitle: "RBThakur", cssFiles: []});
});

app.get("/contact",function(req,res){

    res.render("Contact",{ pageTitle: "Contact Me", cssFiles: ["Resources/CSS/contact.css","Vendor/CSS/MQContact.css"] });
});
app.get("/Project",function(req,res){
    res.render("Project",{pageTitle: "Projects", cssFiles: ["Resources/CSS/project.css"]})
})
app.get("/Project-Details",function(req,res){
    res.render("Project-Details",{pageTitle: "Project Details", cssFiles: ["Resources/CSS/Project-Details.css"]})
})
app.get("/Education",function(req,res){
    res.render("Education", {pageTitle: "Education Details", cssFiles: ["Resources/CSS/Education.css"]})
})
app.get("/Experience",function(req, res){
    res.render("Experience", {pageTitle: "Experience", cssFiles: ["Resources/CSS/Experience.css"]})  
})

app.listen(8000,function(){
    console.log("Server Started!");
})
