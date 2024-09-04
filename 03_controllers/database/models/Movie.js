module.exports = function(sequelize, dataTypes) {
    let alias = 'Movie'//el nombre con el cual sequelize identificara al modelo.

    let cols ={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        },
    }


    let config = {
        tableName: 'Movies',
        timestamps: true,
        //si en la tabla estan los campos created_at y updated_at o su esquivalente en camelCase createdAt y updatedAt.
        underscored: true,
        // si los nombres de los campos created_at y updated_at estan escritos con guion bajo.
    }

   const Movie = sequelize.define(alias, cols, config);
   Movie.associate = function(models){
    Movie.belongsTo(models.Genre, { // hacer el documento Genre como el de Movie en models
        as: 'genre',
        foreingKey: 'genre_id'
    })

   }


   return Movie;
}