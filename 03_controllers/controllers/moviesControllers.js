let db = require("../database/models");
let op = db.Sequelize.Op;

let moviesControllers = {
  index: function (req, res) {
    db.Movie.findAll()
      .then(function (data) {
        //return res.send(data);
        let movieList = data;
        return res.render("movies", { title: "Movies", listaPelis: movieList });
      })
      .catch(function (e) {
        console.log(e);
        //return res.send(e)
      });
  },
  show: function (req, res) {
    let id = req.params.id;
    db.Movie.findByPk(id)
      .then(function (data) {
        return res.send(data);
        return res.send(
          `Estamos en el detalle de la peliculas: ${req.params.id}`
        );
      })
      .catch(function (e) {
        console.log(e);
        //return res.send(e)
      });
  },
  create: function (req, res) {
    return res.render("movieNew", { title: "nueva película" });
  },
  search: function (req, res) {
    let searchTerm = req.query.search;
    db.Movie.findAll({
      where: [{ title: { [op.like]: "%toy%" } }],
    })
      .then(function (data) {
        return res.send(data);
        return res.render("searchResults", {
          title: "Resultados de búsqueda",
          searchTerm,
        });
      })
      .catch(function (e) {
        console.log(e);
        //return res.send(e)
      });
  },
  store: function (req, res) {
    let info = req.body;
    let movie = {
      title: "Probando borrar",
      rating: 8,
      awards: 0,
      release_date: "2011-03-10",
      length: 150,
      genre_id: 4,
    };

    db.Movie.create(movie)
      .then(function (newMovie) {
        return res.send(newMovie);
        return res.redirect("/");
      })
      .catch(function (e) {
        console.log(e);
        //return res.send(e)
      });

    //req.session.lastMovie = info;
    //res.cookie('lastMovie', info.title,{maxAge: 1000*60*5})
  },
  delete: function (req, res) {
    let id = req.body.id;
    db.Movie.destroy({
      where: [{ id: id }],
    }) //si omitimos el id destroy borrara toda la tabla.
      .then(function () {
        return res.redirect("/movies");
      })
      .catch(function (e) {
        console.log(e);
        //return res.send(e)
      });
  },
  update: function (req, res) {
    db.Movie.update(
        {title: "Batman Beguins"},
        {where: [{id: 19}]}
    ) // Atentos a no olvidar donde debemos modificar
        .then(function(){
            return res.redirect("/movies");
        })
        .catch(function (e) {
            console.log(e);
            //return res.send(e)
      });
  },
};


module.exports = moviesControllers;
