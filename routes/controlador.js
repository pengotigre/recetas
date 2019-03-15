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

module.exports = router;
