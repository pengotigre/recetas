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

// Hoja 29 - Ejercico 2:

const eliminarReceta = (texto, callback) => {
	conexion.query('DELETE FROM recetas WHERE nombre LIKE "%"?"%"', texto, (error, result) => {
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

// Hoja 29 - Ejercico 3:

const eliminarReceta2 = (texto, callback) => {
	conexion.query('DELETE FROM recetas WHERE nombre LIKE "%"?"%"', texto, (error, result) => {
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

// Hoja 29 - Ejercico 4:

const todasRecetas = (callback) => {
	conexion.query('SELECT * FROM recetas', (error, result) => {
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

const actualizarReceta = (receta, callback) => {
	conexion.query('UPDATE recetas SET nombre = ?, descripcion = ? WHERE id_receta = ?', [receta.nombre, receta.descripcion, receta.id_receta], (error, result) => {
		if (error) throw error;
		else {
			return callback(error, result);
		};
	});
};

module.exports = {
	nuevaReceta,
	consultaReceta,
	eliminarReceta,
	eliminarReceta2,
	todasRecetas,
	actualizarReceta
};
