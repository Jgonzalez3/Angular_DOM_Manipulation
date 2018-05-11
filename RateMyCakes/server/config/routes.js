var controller = require("../controllers/cakes")();
module.exports = (app) =>{
    app.get("/cakes", (req, res)=>{
        controller.index(req, res);
    })
    app.get("/cakes/:id", (req, res)=>{
        controller.cake(req, res);
    })
    app.post("/cakes", (req, res)=>{
        controller.createcake(req, res);
    })
    app.post("/cakes/comment", (req, res)=>{
        controller.cakecomment(req, res);
    })
}