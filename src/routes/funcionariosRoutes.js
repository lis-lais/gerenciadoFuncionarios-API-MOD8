const express = require('express');
const router = express.Router();
const {
    adicionarFuncionarios,
    listarFuncionarios,
    atualizarFuncionarios,
    deletarFuncionarios,
    buscarFuncionarios,
} = require('../controllers/funcionariosController');

router.post('/', adicionarFuncionarios);
router.get('/', listarFuncionarios);
router.put('/:id', atualizarFuncionarios);
router.delete('/:id', deletarFuncionarios);
router.get('/buscar', buscarFuncionarios);

module.exports = router;
