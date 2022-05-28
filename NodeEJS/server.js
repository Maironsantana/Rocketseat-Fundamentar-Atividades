const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {title: "L",
         message: "orem"},
        {title: "I",
         message: "psum"
        },
        {title: "D",
        message: "olor"
        },
        {title: "A",
        message: "met"
        }
    ];

    const subtitle = "Uma linguagem de modelage para criação de paginas html usando html"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor funcionando")