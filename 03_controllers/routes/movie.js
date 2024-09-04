let express = require('express');
let router = express.Router();

let moviesControllers = require('../controllers/moviesControllers');

//Aquí las rutas
router.get('/', moviesControllers.index);
router.get('/id/:id', moviesControllers.show);
router.get('/movienew', moviesControllers.create);
router.post('/create', moviesControllers.store);
router.get('/results', moviesControllers.search);
router.post('/delete', moviesControllers.delete);


module.exports = router;