const mysql = require('mysql');
const conexion = require('../conexion');

const nuevaReceta = (receta, callback) => {
	console.log(receta);
	conexion.query('INSERT INTO recetas (nombre, descripcion) VALUES ("' + receta.nombre + '", "' + receta.descripcion + '")', (error, result) => {
		return callback(error, result);
	});
};

const consultaReceta = (id_receta, callback) => {
	conexion.query('SELECT * FROM recetas WHERE id_receta = ?', id_receta, (error, result) => {
		console.log(result);
		return callback(error, result);
	});
};

module.exports = {
	nuevaReceta,
	consultaReceta
};
