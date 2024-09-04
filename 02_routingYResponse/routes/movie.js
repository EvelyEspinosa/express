let express = require('express');
let router = express.Router();

//Aquí las rutas
router.get('/', function(req, res){
    return res.send("Hola. Estamos en la página ppal de películas");
});

router.get('/id/:id', function(req, res){
    return res.send("Estamos en el detalle de la película: " + req.params.id)
})

router.get('/id/:id/comments/:commnetsId?', function(req, res){
    return res.send("Estamos en el detalle de la película: " + req.params.id + ". La película tiene comentarios: " + req.params.commnetsId)
})


module.exports = router;