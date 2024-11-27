let funcionarios = [];

function adicionarFuncionariosRepo(funcionario) {
    funcionarios.push(funcionario);
    return funcionario;
}

function listarFuncionariosRepo() {
    return funcionarios;
}

function atualizarFuncionariosRepo(id, funcionarioAtualizado) {
    const index = funcionarios.findIndex(funcionario => funcionario.id === id);
    if (index !== -1) {
        const funcionario = funcionarios[index];

        funcionario.nome = funcionarioAtualizado.nome || funcionario.nome;
        funcionario.cargo = funcionarioAtualizado.cargo || funcionario.cargo;
        funcionario.departamento = funcionarioAtualizado.departamento || funcionario.departamento;
        funcionario.salario = funcionarioAtualizado.salario || funcionario.salario;

        return { sucesso: true, mensagem: 'Funcionário atualizado com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Funcionário não encontrado.' };
    }
}

function deletarFuncionariosRepo(id) {
    const index = funcionarios.findIndex(funcionario => funcionario.id === id);
    if (index!== -1) {
        funcionarios.splice(index, 1);
        return { sucesso: true, menssagem: 'Funcionário deletado com sucesso.' };
    } else {
        return { sucesso: false, menssagem: 'Funcionário não encontrado.' };
    }
}

function buscarFuncionariosRepo({ nome, cargo, departamento }) {
    const filtroFuncionarios = funcionarios.filter(funcionario => {
        return (
            (nome ? funcionario.nome.toLowerCase().includes(nome.toLowerCase()) : true) &&
            (cargo? funcionario.cargo.toLowerCase().includes(cargo.toLowerCase()) : true) &&
            (departamento? funcionario.departamento.toLowerCase().includes(departamento.toLowerCase()) : true)
        );
    });

    return filtroFuncionarios;
}

module.exports = {
    adicionarFuncionariosRepo,
    listarFuncionariosRepo,
    atualizarFuncionariosRepo,
    deletarFuncionariosRepo,
    buscarFuncionariosRepo,
}