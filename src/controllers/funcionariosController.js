const {
    adicionarFuncionariosService,
    listarFuncionariosService,
    atualizarFuncionariosService,
    deletarFuncionariosService,
    buscarFuncionariosService,
} = require('../services/funcionariosService');

function adicionarFuncionarios(req, res) {
    const { nome, cargo, departamento, salario } = req.body;
    const resultado = adicionarFuncionariosService({ nome, cargo, departamento, salario});

    if (resultado.sucesso) {
        res.status(201).json(resultado.funcionario);
    } else {
        res.status(400).json({ message: resultado.mensagem });
    }
}

function listarFuncionarios(req, res) {
    const funcionarios = listarFuncionariosService();
    
    if (funcionarios && funcionarios.length > 0) {
        res.json(funcionarios);
    } else {
        res.status(404).json({ message: 'Nenhum funcionário encontrado' });
    }
}

function atualizarFuncionarios(req, res) {
    const { id } = req.params;
    const { nome, cargo, departamento, salario } = req.body;
    const resultado = atualizarFuncionariosService({ id, nome, cargo, departamento, salario });

    if (resultado.sucesso) {
        res.status(200).json(resultado.funcionario);
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

function deletarFuncionarios(req, res) {
    const id = req.params.id;
    const resultado = deletarFuncionariosService(id);

    if (resultado.sucesso) {
        res.status(200).send({message: 'Funcionário deletado com sucesso.'});
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

function buscarFuncionarios(req, res) {
    const { nome, cargo, departamento } = req.query;
    console.log("Parâmetros recebidos:", { nome, cargo, departamento });
    const resultado = buscarFuncionariosService({ nome, cargo, departamento });

    if (resultado.sucesso && resultado.funcionarios.length > 0) {
        res.json(resultado.funcionarios);
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

module.exports = {
    adicionarFuncionarios,
    listarFuncionarios,
    atualizarFuncionarios,
    deletarFuncionarios,
    buscarFuncionarios,
}
