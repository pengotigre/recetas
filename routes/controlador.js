const express = require('express');
var router = express.Router();

const modelo = require('../modelos/modeloRecetas');

router.get('/', (req, res) => {
	res.render('nuevaReceta');
});

router.post('/nuevaReceta', (req, res) => {
	console.log(req.body);
	modelo.nuevaReceta(req.body, (error, result) => {
		res.redirect('/');
	});
});

router.get('/consultaRecetas/:id_receta', (req, res) => {
	modelo.consultaReceta(req.params.id_receta, (error, result) => {
		res.render('consultaRecetas', {receta: result});
	});
});

// Hoja 29 - Ejercico 2:

router.get('/eliminarReceta', (req, res) => {
	res.render('eliminarReceta');
});

// Hoja 29 - Ejercico 2:

router.delete('/eliminarReceta/eliminar', (req, res) => {
	modelo.eliminarReceta(req.body.nombre, (error, result) => {
		res.render('eliminarReceta', {mensaje: "Se eliminaron las recetas que contenían " + req.body.nombre});
	});
});

// Hoja 29 - Ejercico 3:

router.get('/eliminarReceta2', (req, res) => {
	res.render('eliminarReceta2');
});

router.delete('/eliminarReceta2/:nombre', (req, res) => {
	modelo.eliminarReceta(req.body.nombre, (error, result) => {
		res.render('eliminarReceta2', {mensaje: "Se eliminaron las recetas que contenían " + req.body.nombre});
	});
});

// Hoja 29 - Ejercico 4:

router.get('/mostrarReceta', (req, res) => { // cada vez que volvemos a esta página estará actualizada
	modelo.todasRecetas((error, result) => { // saco todas las recetas (select)
		if (!req.query.nombreRecetas) {// '!' para decir 'si no existe'
			res.render('mostrarReceta', {recetas: result});
		}else{
			modelo.consultaReceta(req.query.nombreRecetas, (error2, result2) => {
				res.render('mostrarReceta', {recetas: result, datosReceta: result2});
			});
		};
	});
});

router.put('/mostrarReceta/actualizar', (req, res) => {
	modelo.actualizarReceta(req.body, (error, result) => {
		res.redirect('/mostrarReceta');
	});
});

module.exports = router;
