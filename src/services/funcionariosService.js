const {
    adicionarFuncionariosRepo,
    listarFuncionariosRepo,
    atualizarFuncionariosRepo,
    deletarFuncionariosRepo,
    buscarFuncionariosRepo,
} = require('../repositories/funcionariosRepository');

function adicionarFuncionariosService({ nome, cargo, departamento, salario }) {
    if (!nome || !cargo || !departamento || !salario) {
        return { sucesso: false, mensagem: 'Todos os campos são obrigatórios' };
    }

    const novoFuncionario = {
        id: Date.now().toString(),
        nome: nome.trim(),
        cargo: cargo.trim(),
        departamento: departamento.trim(),
        salario: parseFloat(salario),
    };

    adicionarFuncionariosRepo(novoFuncionario);
    return { sucesso: true, funcionario: novoFuncionario };
}

function listarFuncionariosService() {
    const funcionarios = listarFuncionariosRepo();
    if (funcionarios && funcionarios.length > 0) {
        return funcionarios;
    } else {
        return [];
    }
}

function atualizarFuncionariosService({ id, nome, cargo, departamento, salario }) {
    if (!id ||!nome ||!cargo ||!departamento ||!salario) {
        return { sucesso: false, mensagem: 'Todos os campos são obrigatórios' };
    }

    const funcionarioAtualizado = {
        id,
        nome: nome || funcionario.nome,
        cargo: cargo || funcionario.cargo,
        departamento: departamento || funcionario.departamento,
        salario: salario || funcionario.salario,
    };

    const resultadoRepo = atualizarFuncionariosRepo(id, funcionarioAtualizado);

    if (resultadoRepo.sucesso) {
        return { sucesso: true, funcionario: funcionarioAtualizado };
    } else {
        return { sucesso: false, mensagem: 'Funcionário não encontrado' };
    }
}

function deletarFuncionariosService(id) {
    const resultadoRepo = deletarFuncionariosRepo(id);

    if (resultadoRepo.sucesso) {
        return { sucesso: true, message: 'Funcionário deletado com sucesso' };
    } else {
        return { sucesso: false, message: 'Funcionário não encontrado' };
    }
}

function buscarFuncionariosService({ nome, cargo, departamento }) {
    console.log('Parâmetros recebidos para busca:', { nome, cargo, departamento });

    // Validação para garantir que pelo menos um filtro foi informado
    if (!nome && !cargo && !departamento) {
        console.log('Nenhum filtro informado para a busca de funcionários.');
        return { sucesso: false, mensagem: 'Pelo menos um dos filtros (nome, cargo, departamento) deve ser informado.' };
    }

    const funcionarios = buscarFuncionariosRepo({ nome, cargo, departamento });

    if (funcionarios && funcionarios.length > 0) {
        return { sucesso: true, funcionarios: funcionarios };
    } else {
        return { sucesso: false, mensagem: 'Nenhum funcionário encontrado.' };
    }
}


module.exports = {
    adicionarFuncionariosService,
    listarFuncionariosService,
    atualizarFuncionariosService,
    deletarFuncionariosService,
    buscarFuncionariosService,
}