module.exports = ()=>{
    require("../models/cake")();
    // require("../models/")();
    return{
        index: (req, res)=>{
            Cake.find({}, (err, cakes)=>{
                err=err ? console.log("ERROR ALL", err) & res.json({message: "INDEX ERROR"}): res.json({message: "Success", cakes: cakes});
            })
        },
        cake: (req, res)=>{
            var cakeid = req.params.id;
            Cake.findById(id, (err, task)=>{
                err=err ? console.log("Error Cakefind", err) & res.json({message: "CAKE FindError"}): res.json({message: "Success", cake:cake}); 
            })
        },
        createcake: (req, res)=>{
            var newcake = new Cake({baker: req.body.baker, image: req.body.image})
            newcake.save((err)=>{
                err=err ? console.log("CAKE SAVE Error", err) & res.json({message: "ERROR with CAKE SAVE"}): res.json({message: "Success"});
            })
        },
        cakecomment: (req, res)=>{
            var newcomment = new Comm({comment: req.body.comment, rating: req.body.rating});
            console.log(req.body);
            var cakeid = req.body.cakeid;
            console.log(cakeid);
            Cake.findById(cakeid, (err, cake)=>{
                cake.comments.push(newcomment); 
                cake.save(cake);
                newcomment.save((error)=>{
                    err=err ? console.log("SAVE comment ERROR", error) & res.json({message: "SAVE Comment to Cake error"}): res.json({message: "Success"});
                })
            })
        },
    }
}